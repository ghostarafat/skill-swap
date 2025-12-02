function CategoriesSection() {
  const categories = [
    "Web Development",
    "Graphics Design",
    "Digital Marketing",
    "Language Learning",
    "Music",
    "Photography",
    "Cooking",
    "Fitness",
  ];

  return (
    <section className="py-16 bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-10">
          Explore by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-200 rounded-full flex items-center justify-center text-3xl font-bold text-yellow-800">
                {cat[0]}
              </div>
              <p className="font-semibold text-gray-800 text-lg">{cat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
