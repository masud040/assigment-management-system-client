import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
const AssignmentCard = ({ assignment, assignments, setAssignments }) => {
  const { user } = useAuth();
  const email = user?.email;
  const { _id, title, marks, thumbnailImage, difficultLevel } =
    assignment || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/assignment/?id=${id}&email=${email}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = assignments.filter(
                (assign) => assign._id !== _id
              );
              setAssignments(remaining);
            } else {
              Swal.fire({
                title: "Error!",
                text: "You are not allowed to delete this assignment",
                icon: "error",
                confirmButtonText: "Okay",
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#0c0d21] flex flex-col p-3 rounded-md ">
      <img
        className="h-52 md:h-60  w-full rounded-md"
        src={thumbnailImage}
        alt=""
      />
      <div className="my-2 text-white space-y-2 flex-grow">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h3 className="text-xl font-semibold">Marks: {marks}</h3>
        </div>
        <h3 className="text-lg font-bold">Level: {difficultLevel}</h3>
      </div>
      <div className="flex justify-between gap-4 my-3">
        <Link
          to={`/viewAssignment/${_id}`}
          className="p-2 text-xs md:text-sm rounded-md text-white bg-gradient-to-r from-violet-500 font-semibold to-fuchsia-500"
        >
          View Assignment
        </Link>
        <Link
          to={`/update-assignment/${_id}`}
          className=" p-2 rounded-md text-xs md:text-sm text-white bg-gradient-to-r from-violet-500 font-semibold to-green-500"
        >
          Update Assignment
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className=" p-2 rounded-md text-xs md:text-sm text-white bg-gradient-to-r from-red-500 font-semibold to-fuchsia-500"
        >
          Delete Assignment
        </button>
      </div>
    </div>
  );
};
AssignmentCard.propTypes = {
  assignment: PropTypes.object,
  assignments: PropTypes.array,
  setAssignments: PropTypes.func,
};

export default AssignmentCard;
