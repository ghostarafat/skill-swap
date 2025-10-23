import { useEffect, useState } from "react";
import { GiSunflower } from "react-icons/gi";
import HeroSlider from "../../components/HeroSlider";

import SkillCard from "../../components/SkillCard";
import TopProviders from "../../components/TopProviders";
import HowItWorks from "../../components/Sections/HowItWorks";
import CommunityStories from "../../components/Sections/CommunityStories";

function Home() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/public/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.log("Error loading skills:", err));
  }, []);

  return (
    <div className="px-6 my-10 w-full max-w-[1200px] mx-auto">
      <div className="text-center mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4 flex items-center justify-center gap-2">
          Welcome to SkillSwap <GiSunflower className="text-yellow-500" />
        </h1>
        <p className="text-gray-600 mb-10">
          Learn new skills, share yours, and grow together.
        </p>
      </div>

      <HeroSlider />

      <div className="">
        <h2 className=" text-2xl font-bold mb-5 text-yellow-700 text-center">
          🔥 Popular Skills
        </h2>
        <div className=" grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </div>
      </div>

      <TopProviders />
      <HowItWorks />
      <CommunityStories />
    </div>
  );
}

export default Home;
