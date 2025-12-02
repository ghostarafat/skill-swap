import { useEffect, useState } from "react";
import SkillCard from "../components/SkillCard";
import { Helmet } from "react-helmet";

function AllSkills() {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setFilteredSkills(data);
      });
  }, []);

  // Search + Filter + Sort
  useEffect(() => {
    let result = [...skills];

    // Search by title
    if (searchTerm) {
      result = result.filter((skill) =>
        skill.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    if (sortOrder === "asc") {
      result.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else if (sortOrder === "desc") {
      result.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
    } else if (sortOrder === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredSkills(result);
  }, [searchTerm, sortOrder, skills]);

  return (
    <>
      <Helmet>
        <title>All Skills - SkillSwap</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-700 mb-4">
            All Skills
          </h1>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Explore all the amazing skills shared by our talented community
          </p>

          {/* Search + Sort Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center bg-white p-6 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
            />

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-6 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              <option value="default">Default Order</option>
              <option value="asc">Name: A → Z</option>
              <option value="desc">Name: Z → A</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
            </select>
          </div>

          {/* Skills Grid - 4 Cards per Row */}
          {filteredSkills.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.skillId} skill={skill} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">
                No skills found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AllSkills;
