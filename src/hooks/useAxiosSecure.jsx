import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://assignment-management-system-server-side.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response.status === 401 || error.response.status) {
          console.log(error);
          logoutUser();
          navigate("/login");
        }
      }
    );
  }, [logoutUser, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
