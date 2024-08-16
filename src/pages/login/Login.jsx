// import img from '../../assets/others/authentication.png'
import "./Login.css";
import loginImage from "../../assets/others/authentication2.png";
import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
const Login = () => {
  // for recaptcha--------------
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled;
    }
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
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
    });
  };
  // --------------------------------
  return (
    <div>
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
                  ref={captchaRef}
                  name="captcha"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-accent btn-xs mt-2"
                >
                  Validate
                </button>
              </div>
              {/* ---------------------- */}
              <div className="form-control mt-6">
                <input
                  type="submit"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
