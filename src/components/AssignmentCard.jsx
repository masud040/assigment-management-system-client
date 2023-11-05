import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const AssignmentCard = ({ assignment }) => {
  const { _id, title, marks, thumbnailImage, difficultLevel } =
    assignment || {};
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
          className="p-2 text-sm rounded-md text-white bg-gradient-to-r from-violet-500 to-fuchsia-500"
        >
          View Assignment
        </Link>
        <button className=" p-2 rounded-md text-sm text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
          Update Assignment
        </button>
        <button className=" p-2 rounded-md text-sm text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
          Delete Assignment
        </button>
      </div>
    </div>
  );
};
AssignmentCard.propTypes = {
  assignment: PropTypes.object,
};

export default AssignmentCard;
