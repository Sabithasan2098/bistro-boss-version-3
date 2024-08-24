import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxios = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  // axios intercepts
  // request interceptors to add authorization header for every secure call
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("request stoped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      // Do something with request error
      return Promise.reject(err);
    }
  );
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.request.status;
      // console.log("status errors in the interceptors", status);
      // for 401 & 403 logOut the user and move the user in login page
      if (status === 401 || status === 403) {
        logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxios;
