import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const handleGoogleLogin = () => {
    signInWithGoogle().then((res) => {
      console.log(res.user);
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
