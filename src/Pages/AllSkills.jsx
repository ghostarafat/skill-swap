import { useEffect, useState } from "react";
import SkillCard from "../components/SkillCard";

function AllSkills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.log("Error loading skills:", err));
  }, []);

  return (
    <div className="px-6 my-10 w-full max-w-[1200px] mx-auto">
      <h2 className="text-3xl font-bold text-yellow-700 mb-6 text-center">
        All Skills
      </h2>
      <p className="text-gray-400 text-center mb-10">
        Explore all the skills offered on SkillSwap.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.length > 0 ? (
          skills.map((skill) => <SkillCard key={skill.skillId} skill={skill} />)
        ) : (
          <p className="text-center text-gray-500">No skills available.</p>
        )}
      </div>
    </div>
  );
}

export default AllSkills;
