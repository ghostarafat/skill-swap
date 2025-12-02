import { useEffect, useState } from "react";
import { GiSunflower } from "react-icons/gi";
import HeroSlider from "../../components/HeroSlider";
import SkillCard from "../../components/SkillCard";
import TopProviders from "../../components/TopProviders";
import HowItWorks from "../../components/Sections/HowItWorks";
import CommunityStories from "../../components/Sections/CommunityStories";
import NewsletterSection from "../../components/Sections/NewsletterSection";
import CategoriesSection from "../../components/Sections/CategoriesSection";

function Home() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.log("Error loading skills:", err));
  }, []);

  return (
    <div className="px-4 sm:px-6  mx-auto max-w-7xl w-full">
      {/* --- Hero Title Section --- */}
      <div className="text-center mt-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-yellow-700 mb-3 flex items-center justify-center gap-2 leading-tight">
          Welcome to SkillSwap 🌻
        </h1>
        <p className="text-gray-600 mb-8 text-sm sm:text-base max-w-md mx-auto px-2">
          Learn new skills, share yours, and grow together.
        </p>
      </div>

      <HeroSlider />

      {/* --- Popular Skills --- */}
      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-yellow-700 text-center">
          🔥 Popular Skills
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </div>
      </div>
      <CategoriesSection />

      <TopProviders />
      <HowItWorks />
      <CommunityStories />
      <NewsletterSection />
    </div>
  );
}

export default Home;
