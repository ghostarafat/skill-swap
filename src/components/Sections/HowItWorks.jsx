function HowItWorks() {
  return (
    <div className="my-10 text-center">
      <h2 className="text-2xl font-bold mb-5 text-yellow-700">
        🪄 How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-5 bg-yellow-100 rounded-xl">
          <h3 className="font-semibold">1. Explore Skills</h3>
          <p>Browse through local skill listings and find what excites you.</p>
        </div>
        <div className="p-5 bg-yellow-100 rounded-xl">
          <h3 className="font-semibold">2. Connect</h3>
          <p>Reach out to the skill provider directly through SkillSwap.</p>
        </div>
        <div className="p-5 bg-yellow-100 rounded-xl">
          <h3 className="font-semibold">3. Learn & Grow</h3>
          <p>Book a session, learn something new, and share your experience.</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
