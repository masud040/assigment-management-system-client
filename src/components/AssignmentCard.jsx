import PropTypes from "prop-types";
const AssignmentCard = ({ assignment }) => {
  const { _id, title, marks, thumbnailImage, level } = assignment || {};
  return (
    <div className="bg-gray-400 rounded-md h-40">
      <img src={thumbnailImage} alt="" />
      <h1>{title}</h1>
      <h3>{marks}</h3>
      <h3>{level}</h3>
    </div>
  );
};
AssignmentCard.propTypes = {
  assignment: PropTypes.object,
};

export default AssignmentCard;
