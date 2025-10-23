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
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full max-w-[1200px] mx-auto aspect-[16/9] rounded-lg overflow-hidden">
            <img
              src="https://i.postimg.cc/8zmyBMn6/slide1.png"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full max-w-[1200px] mx-auto aspect-[16/9] rounded-lg overflow-hidden">
            <img
              src="https://i.postimg.cc/VLcdQCDB/slide2.png"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full max-w-[1200px] mx-auto aspect-[16/9] rounded-lg overflow-hidden">
            <img
              src="https://i.postimg.cc/Gtjr1Hmk/slide3.png"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
