import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function HeroSlider() {
  return (
    <div className="w-full mb-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide>
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/491/740/non_2x/knowledge-or-education-as-intelligence-mind-experience-concept-up-skill-learn-new-things-or-knowledge-development-for-new-skill-and-improve-job-qualification-vector.jpg"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/set-people-sharing_52683-3091.jpg?semt=ais_hybrid&w=740&q=80"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/my-hobby-related-sports-activities-freetime-illustration_24908-60577.jpg?semt=ais_hybrid&w=740&q=80"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
