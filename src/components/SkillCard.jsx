function SkillCard({ skill }) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="rounded-md h-40 w-full object-cover"
      />
      <h3 className="text-lg font-semibold mt-2">{skill.skillName}</h3>
      <p className="text-sm text-gray-600">{skill.providerName}</p>
      <p className="text-yellow-600 font-bold">${skill.price} / session</p>
      <p className="text-sm text-gray-500">⭐ {skill.rating}</p>
      <button className="mt-3 px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
        View Details
      </button>
    </div>
  );
}

export default SkillCard;
