import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="mb-8 md:mb-20 ">
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"order online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="uppercase text-xl md:text-3xl absolute -mt-12 left-6 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="uppercase text-xl md:text-3xl absolute -mt-12 left-6 text-white">
            pizza{" "}
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="uppercase text-xl md:text-3xl absolute -mt-12 left-6 text-white">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="uppercase text-xl md:text-3xl absolute -mt-12 left-6 text-white">
            pestry
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="uppercase text-xl md:text-3xl absolute -mt-12 left-6 text-white">
            deseart
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
