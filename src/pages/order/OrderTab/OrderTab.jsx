import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  // to pagination
  const itemsPerPage = 6;

  // Split the items into chunks of 6 items per page
  const chunkedItems = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    chunkedItems.push(items.slice(i, i + itemsPerPage));
  }
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {chunkedItems.map((itemChunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 gap-10">
              {itemChunk.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
