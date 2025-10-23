import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillCard({ skill }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      className="rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition duration-200"
      data-aos="zoom-in-up"
    >
      <div className="overflow-hidden rounded-md h-40 w-full">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="h-full w-full object-cover transform transition-transform duration-300 ease-out hover:scale-105 hover:rotate-1"
        />
      </div>

      <h3 className="text-lg font-semibold mt-3 text-yellow-700">
        {skill.skillName}
      </h3>
      <p className="text-sm text-gray-600">By {skill.providerName}</p>

      <div className="flex justify-between items-center mt-1 mb-3">
        <p className="text-yellow-600 font-bold">${skill.price}</p>
        <p className="text-sm text-gray-500">⭐ {skill.rating}</p>
      </div>

      <Link to={`/skill/${skill.skillId}`}>
        <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default SkillCard;
