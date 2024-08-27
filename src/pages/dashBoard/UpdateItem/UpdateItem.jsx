import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const item = useLoaderData();

  const { register, handleSubmit, reset } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();

  // image hosting
  const onSubmit = async (data) => {
    // image upload to imageBB then get a url from imageBB
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.name} successfully updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle heading={"Update item"} subHeading={"Updated item"} />
      <div className="bg-[#f3f3f3] py-3 px-5 mb-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder={item.name}
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-0 md:gap-5 flex-col md:flex-row">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={"default"}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  {item.category}
                </option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
                <option value="drink">drink</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                step="0.01"
                placeholder={item.price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered"
              placeholder={item.recipe}
            ></textarea>
          </label>
          <div className="mt-4">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn bg-gradient-to-r from-[#d1a054] to-[#f1ae44] text-white mt-6"
            >
              Update Recipe Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
