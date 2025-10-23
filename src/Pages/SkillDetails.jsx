import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

function SkillDetails() {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.skillId === parseInt(id));
        setSkill(selected);
      })
      .catch((err) => console.log("Error:", err));
  }, [id]);

  const handleBookSession = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    e.target.reset();
  };

  if (!skill) {
    return (
      <p className="text-center mt-10 text-gray-600">
        Loading skill details...
      </p>
    );
  }

  return (
    <div className="px-6 my-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="rounded-lg mb-5 w-full h-60 object-cover"
        />
        <h2 className="text-2xl font-bold text-yellow-700 mb-2">
          {skill.skillName}
        </h2>
        <p>
          <strong>Provider:</strong> {skill.providerName}
        </p>
        <p>
          <strong>Email:</strong> {skill.providerEmail}
        </p>
        <p>
          <strong>Category:</strong> {skill.category}
        </p>
        <p>
          <strong>Price:</strong> ${skill.price}
        </p>
        <p>
          <strong>Rating:</strong> ⭐ {skill.rating}
        </p>
        <p>
          <strong>Slots Available:</strong> {skill.slotsAvailable}
        </p>
        <p className="mt-3 text-gray-600">{skill.description}</p>

        <form onSubmit={handleBookSession} className="mt-6 space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-2 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
          >
            Book Session
          </button>
        </form>
      </div>
    </div>
  );
}

export default SkillDetails;
