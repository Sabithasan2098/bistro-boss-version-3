const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img
        className="h-[70px] w-[70px] rounded-b-full rounded-r-full"
        src={image}
        alt="loading"
      />
      <div>
        <h3 className="uppercase">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
