import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HowItWorks() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    {
      title: "Explore Skills",
      description:
        "Browse through local skill listings and find what excites you.",
      emoji: "🔍",
    },
    {
      title: "Connect",
      description:
        "Reach out to the skill provider directly through SkillSwap.",
      emoji: "🤝",
    },
    {
      title: "Learn & Grow",
      description:
        "Book a session, learn something new, and share your experience.",
      emoji: "🌱",
    },
  ];

  return (
    <div className="my-16 w-11/12 mx-auto text-center relative">
      <h2 className="text-3xl font-bold mb-12 text-yellow-700">
        🪄 How It Works
      </h2>

      <div className="hidden md:block absolute top-28 left-1/2 w-1 bg-yellow-300 h-[calc(100%-7rem)] -translate-x-1/2"></div>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:w-1/3"
            data-aos="fade-up"
          >
            <div className="text-6xl mb-4">{step.emoji}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
