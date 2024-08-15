import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
import Button from "../../shered/Button/Button";

const FeaturedItems = () => {
  return (
    <div className="mb-20 featured bg-fixed text-white bg-opacity-35">
      <div className="pt-8">
        <SectionTitle subHeading="Check it out" heading="from our menu" />
      </div>
      <div className="md:flex justify-center items-center gap-10 md:px-28 md:pb-20">
        <div className="md:w-2/5">
          <img src={FeaturedImg} alt="" />
        </div>
        <div className="md:w-3/5 space-y-3">
          <div className="hover:bg-slate-300 hover:text-yellow-700">
            <h3>Aug 12, 2024</h3>
            <h2 className="uppercase">where can i get some ?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              saepe dolorum eum sint natus tempora, ab, quas ullam atque
              voluptate cum consequuntur error! Quisquam, perspiciatis? Commodi
              laudantium deserunt mollitia delectus.
            </p>
          </div>
          <Button Button={"order now"} textColor="white" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
