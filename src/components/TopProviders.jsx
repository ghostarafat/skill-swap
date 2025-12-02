function TopProviders() {
  const providers = [
    {
      name: "Riya Sen",
      skill: "Yoga",
      rating: 4.9,
      image: "https://i.postimg.cc/d1BPzVvs/avatar1.png",
    },
    {
      name: "Alex Martin",
      skill: "Guitar",
      rating: 4.8,
      image: "https://i.postimg.cc/vHjFRjRR/avatar2.png",
    },
    {
      name: "Sara Hossain",
      skill: "English",
      rating: 4.6,
      image: "https://i.postimg.cc/85TxBgvh/avatar3.png",
    },
  ];

  return (
    <div className=" w-11/12 mx-auto mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center  text-yellow-700 mb-10">
        🌟 Top Rated Providers
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {providers.map((p, i) => (
          <div
            key={i}
            className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-[length:200%_200%] hover:animate-gradientMove transition-all duration-500"
          >
            {/* inner card */}
            <div className="bg-white  rounded-2xl p-6 text-center shadow-md group-hover:shadow-xl transform group-hover:-translate-y-2 transition-all duration-300 ease-out">
              <div className="h-20 w-20 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-yellow-300 to-orange-400 flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  p.name.charAt(0)
                )}
              </div>

              <h3 className="font-bold text-lg text-gray-800">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.skill}</p>

              <div className="mt-2 text-yellow-600 font-semibold text-sm">
                ⭐ {p.rating}
              </div>

              <button
                disabled
                className="mt-4 px-4 py-2 bg-gray-300 text-gray-600 text-sm rounded-md cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProviders;
