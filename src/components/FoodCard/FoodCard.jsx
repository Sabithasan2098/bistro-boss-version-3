import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Button from "../../pages/shered/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user?.email) {
      // send data to database
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={() => {
              handleAddToCart(item);
            }}
          >
            {" "}
            <Button
              Button={"Add to cart"}
              borderColor={"gold"}
              textColor={"gold"}
            ></Button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
