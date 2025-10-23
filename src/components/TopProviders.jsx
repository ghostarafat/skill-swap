function TopProviders() {
  const providers = [
    { name: "Riya Sen", skill: "Yoga", rating: 4.9 },
    { name: "Alex Martin", skill: "Guitar", rating: 4.8 },
    { name: "Sara Hossain", skill: "English", rating: 4.6 },
  ];

  return (
    <div className="my-10 w-11/12 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-5 text-yellow-700">
        🌟 Top Rated Providers
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {providers.map((p, i) => (
          <div
            key={i}
            className="p-5 bg-yellow-100 rounded-xl shadow text-center"
          >
            <h3 className="font-bold">{p.name}</h3>
            <p>{p.skill}</p>
            <p>⭐ {p.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProviders;
