import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  // for redirect where you came from -----------------
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // --------------------------------------------------

  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });
      // after login redirect where you came from
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 2000);
    });
  };
  return (
    <div className=" text-center mb-5 mt-2">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-wide bg-purple-600 text-white hover:text-red-500"
      >
        <FaGoogle />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
