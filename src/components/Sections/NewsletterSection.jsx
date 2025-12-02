function NewsletterSection() {
  return (
    <section className="py-20 bg-yellow-600 dark:bg-yellow-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-yellow-100 mb-4">
          Stay Updated with New Skills!
        </h2>
        <p className="text-yellow-100 dark:text-yellow-200 mb-10 text-lg">
          Get weekly tips, exclusive offers & new skill alerts straight to your
          inbox
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-6 py-4 rounded-lg text-gray-800 dark:text-gray-900 flex-1 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-black dark:bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-900 dark:hover:bg-gray-700 transition duration-300"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
