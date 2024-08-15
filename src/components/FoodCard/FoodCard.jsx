import Button from "../../pages/shered/Button/Button";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-[#fafafa] shadow-xl rounded-none">
      <figure className="relative">
        <img src={image} alt={name} />
        <p className="absolute bg-black text-white px-4 py-1 top-5 right-5">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <Button
            Button={"Add to cart"}
            borderColor={"gold"}
            textColor={"gold"}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
