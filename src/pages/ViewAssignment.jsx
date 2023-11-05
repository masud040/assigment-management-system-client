import { Link, useLoaderData } from "react-router-dom";
import detailsThumbnail from "../assets/images/assignmentDetails.jpeg";
const ViewAssignment = () => {
  const assignment = useLoaderData();
  const {
    _id,
    email,
    title,
    marks,
    thumbnailImage,
    difficultLevel,
    description,
    date,
  } = assignment || {};
  return (
    <div>
      <div className="relative">
        <img
          className="w-full object-contain rounded-md"
          src={detailsThumbnail}
          alt=""
        />
        <h2 className=" text-3xl md:text-4xl font-bold absolute bottom-3 left-[22%] md:left-[35%] lg:left-[40%]">
          Assignment Details
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 my-7 ">
        <div>
          <img src={thumbnailImage} className="rounded-md w-full" alt="" />
          <h1 className="text-3xl font-bold my-4">Assignment: {title}</h1>
        </div>
        <div className="md:col-span-2 space-y-1">
          <p className="text-xl font-bold underline">Details</p>
          <p className="text-md font-bold">Total Marks: {marks}</p>
          <p className="text-md font-bold">DifficultLevel: {difficultLevel}</p>
          <p className="text-md font-bold">Created Date: {date}</p>
          <p className="font-semibold text-justify">{description}</p>
          <div>
            <Link
              to={"/submission"}
              className="btn mt-4 text-sm text-white bg-gradient-to-r from-violet-500 to-fuchsia-500"
            >
              Take assignment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAssignment;
