import { Helmet } from "react-helmet-async";
import Cover from "../../shered/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [data] = useMenu([]);
  const desserts = data.filter((item) => item.category === "dessert");
  const soup = data.filter((item) => item.category === "soup");
  const salad = data.filter((item) => item.category === "salad");
  const pizza = data.filter((item) => item.category === "pizza");
  const offered = data.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={menuImg}
        title="our menu"
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est, optio ducimus voluptate facere blanditiis."
        }
      ></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items  */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>
      {/* pizza menu category */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      {/* salad menu category */}
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
      {/* soup menu category */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
