import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const CheafRecomendetion = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  const cheafRecommends = menu.filter((data) => data.category === "offered");
  const cheafRecommendsData = cheafRecommends.slice(0, 3);
  return (
    <div className="mb-8 md:mb-20 ">
      <SectionTitle heading="chef recommends" subHeading="should try" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {cheafRecommendsData.map((data) => (
          <div
            key={data._id}
            className="card bg-base-100 shadow-xl rounded-none"
          >
            <figure>
              <img src={data.image} alt="Offered" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheafRecomendetion;
