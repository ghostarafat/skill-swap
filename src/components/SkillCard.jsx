import { Link } from "react-router-dom";

function SkillCard({ skill }) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition duration-200">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="rounded-md h-40 w-full object-cover"
      />
      <h3 className="text-lg font-semibold mt-3 text-yellow-700">
        {skill.skillName}
      </h3>
      <p className="text-sm text-gray-600">By {skill.providerName}</p>
      <p className="text-yellow-600 font-bold mt-1">${skill.price}</p>
      <p className="text-sm text-gray-500 mb-3">⭐ {skill.rating}</p>

      <Link to={`/skill/${skill.skillId}`}>
        <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default SkillCard;
