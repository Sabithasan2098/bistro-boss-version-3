import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import CheafRecomendetion from "../CheafRecomendetion/CheafRecomendetion";
import MiddleBanner from "../ChefServices/ChefServices";
import FeaturedItems from "../Featured/FeaturedItems";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <MiddleBanner />
      <PopularMenu />
      <CallUs />
      <CheafRecomendetion />
      <FeaturedItems />
      <Testimonial />
    </div>
  );
};

export default Home;
