import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "../assets/loading.json";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const { pathname } = useLocation();

  if (isLoading) {
    return (
      <Lottie
        animationData={loading}
        className="w-[100px] mx-auto"
        loop={true}
      ></Lottie>
    );
  }
  if (!isLoading && !user?.email) {
    return <Navigate to="/login" state={pathname}></Navigate>;
  }
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
