function CommunityStories() {
  return (
    <div className="my-16 w-11/12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-700">
        💬 Community Stories
      </h2>

      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="text-gray-700 italic text-lg relative">
          <span className="text-4xl absolute -top-4 -left-2 text-yellow-400">
            “
          </span>
          I traded my photography lessons for yoga sessions — it’s been an
          amazing experience!
          <span className="text-4xl absolute -bottom-6 -right-2 text-yellow-400">
            ”
          </span>
        </p>
        <p className="mt-4 text-right font-semibold text-yellow-700">
          – Mehedi Hasan
        </p>
      </div>
    </div>
  );
}

export default CommunityStories;
