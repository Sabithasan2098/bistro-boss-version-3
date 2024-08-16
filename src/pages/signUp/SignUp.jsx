import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  // react hook form using with firebase-----------------------
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are successfully register",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    });
  };
  // -----------------------------------------------------
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-400 font-semibold">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-400 font-semibold">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-400 font-semibold">
                    password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-400 font-semibold">
                    password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-400 font-semibold">
                    password must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-400 font-semibold">
                    password must have one uppercase one lowercase one number
                    and one special character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center mb-2 text-yellow-500 font-semibold">
              Already have an account please{" "}
              <Link to={"/login"} className="underline text-red-500">
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
