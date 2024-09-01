import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxios();
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle heading={"wanna add more"} subHeading={"My Cart"} />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Total Orders:{cart?.length}</h2>
          <h2 className="text-2xl font-bold">Total Price:${totalPrice}</h2>
          {cart?.length ? (
            <Link to={"/dashboard/payment"}>
              <button className="btn btn-warning">Pay</button>
            </Link>
          ) : (
            <button disabled className="btn btn-warning">
              Pay
            </button>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="table mt-5">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <label>
                      <p>{index + 1}</p>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="Food item" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3>{item.name}</h3>
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost text-4xl text-red-700"
                    >
                      <MdDelete />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
