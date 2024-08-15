import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../shered/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OrderTab from "../OrderTab/OrderTab";
const Order = () => {
  // click to order in menu redirect in order page with variant like "salad", "pizza", "soup", "dessert", "drink"
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  //   -------------------------------------------------------------------
  const [data] = useMenu([]);
  const desserts = data.filter((item) => item.category === "dessert");
  const soup = data.filter((item) => item.category === "soup");
  const salad = data.filter((item) => item.category === "salad");
  const pizza = data.filter((item) => item.category === "pizza");
  const drinks = data.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={orderCover}
        title={"Our shop"}
        description={"would you like to try our dish ?"}
      />

      <Tabs
        className="my-10 md:my-20"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
