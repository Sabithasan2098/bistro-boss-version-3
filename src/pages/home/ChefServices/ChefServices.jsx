import { useEffect, useState } from "react";
import chefServices from "../../../assets/home/chef-service.jpg";
const MiddleBanner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the screen size on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fullText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          ipsam perspiciatis natus fuga. Voluptas nostrum dolor debitis
          inventore quod. Natus quasi aspernatur assumenda, voluptatibus
          distinctio quos nihil consequuntur itaque. Magnam!`;

  const truncatedText = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;

  return (
    <div className="mb-8 md:mb-20 relative">
      <img src={chefServices} alt="" />
      <div
        className="bg-white text-black text-center px-3 py-2 sm:px-8 sm:py-8
         md:px-14 md:py-10 mx-4 sm:mx-16 md:mx-28 absolute top-5 md:top-20 "
      >
        <h2 className=" text-lg md:text-2xl">Bistro Boss</h2>
        <p className="text-sm md:text-base">
          {isSmallScreen ? truncatedText : fullText}
        </p>
      </div>
    </div>
  );
};

export default MiddleBanner;
