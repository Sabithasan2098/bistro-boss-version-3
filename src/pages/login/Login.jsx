// import img from '../../assets/others/authentication.png'
import "./Login.css";
import loginImage from "../../assets/others/authentication2.png";
import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  // for private page-------------------
  const navigate = useNavigate();
  const location = useLocation();

  // when login navigate where you came from-------
  const from = location.state?.from?.pathname || "/";
  console.log("state to the location", location.state);
  // ----------------------------------------------

  // for recaptcha--------------
  const [disabled, setDisabled] = useState(true);
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled;
    }
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  // for redirect home page
  //   ----------------------
  // for login with fireBase---------
  const { signIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are successfully login",
        showConfirmButton: false,
        timer: 1500,
      });
    });
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 2000);
  };
  // --------------------------------
  return (
    <div>
      <Helmet>
        <title>Bistro Boss |login</title>
      </Helmet>
      <div className="hero min-h-screen bgImage">
        <div className="hero-content flex flex-col md:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={loginImage} alt="" />
          </div>
          <div
            onSubmit={handleLogin}
            className="card md:w-1/2 max-w-sm shrink-0 shadow-2xl"
          >
            <h1 className="text-center text-5xl font-semibold">Login</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* for-recapcha */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* ---------------------- */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  // TODO disabled
                  disabled={disabled}
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center mb-2 text-yellow-500 font-semibold">
              Don not have an account please{" "}
              <Link to={"/signUp"} className="underline text-red-500">
                register
              </Link>
            </p>
            <div className="divider mx-8"></div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
