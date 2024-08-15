import { Link } from "react-router-dom";
import Button from "../../shered/Button/Button";
import Cover from "../../shered/Cover/Cover";
import MenuItem from "../../shered/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && (
        <Cover
          img={img}
          title={title}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est, optio ducimus voluptate facere blanditiis."
          }
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-10 md:mb-20">
        <Link to={`/order/${title}`}>
          <Button Button={"order your favorite food"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
