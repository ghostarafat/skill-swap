import { GiSunflower } from "react-icons/gi";

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4">
        Welcome to SkillSwap <GiSunflower className="inline text-yellow-500" />
      </h1>
      <p className="text-gray-600">
        Learn new skills, share yours and grow together.
      </p>
    </div>
  );
}

export default Home;
