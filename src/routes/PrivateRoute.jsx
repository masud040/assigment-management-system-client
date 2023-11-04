import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const { pathname } = useLocation();

  if (isLoading) {
    return <h1>Loading....</h1>;
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
