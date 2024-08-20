import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Button from "../../pages/shered/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // for always update the cart
          refetch();
        }
      });
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
          <button onClick={handleAddToCart}>
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
