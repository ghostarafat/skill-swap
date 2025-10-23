import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function HeroSlider() {
  const slides = [
    {
      img: "https://i.postimg.cc/8zmyBMn6/slide1.png",
      title: "Unlock New Skills, Unlock Opportunities",
      text: "Join SkillSwap and start learning or sharing skills with people worldwide.",
    },
    {
      img: "https://i.postimg.cc/VLcdQCDB/slide2.png",
      title: "Empower Your Learning Journey",
      text: "Collaborate, teach, and grow together with our vibrant community.",
    },
    {
      img: "https://i.postimg.cc/Gtjr1Hmk/slide3.png",
      title: "Turn Passion Into Knowledge",
      text: "Swap your skills, explore new ideas, and inspire others every day.",
    },
  ];

  return (
    <div className="w-full mb-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full max-w-[1200px] mx-auto aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-3 sm:px-6">
                <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-3 drop-shadow-lg leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-lg mb-3 sm:mb-5 max-w-xs sm:max-w-xl drop-shadow-md text-gray-300">
                  {slide.text}
                </p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold text-xs sm:text-sm md:text-base px-3 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-md transition-all duration-300">
                  Explore
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
