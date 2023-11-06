import { Link, useRouteError } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="w-[90%]  mt-5 mx-auto">
      <Link
        to={"/"}
        className="flex bg-gray-300 w-max px-4 py-2 rounded-md hover:bg-gray-400 items-center"
      >
        <BsArrowLeft />
        Back To Home
      </Link>
      <img src="https://i.ibb.co/0DsbGfR/404.gif" alt="" />
    </div>
  );
};

export default NotFound;
