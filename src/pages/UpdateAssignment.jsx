import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  const navigate = useNavigate();

  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const shortDate = new Date(startDate).toDateString();
  const {
    _id,
    title,
    marks,
    thumbnailImage,
    difficultLevel,
    description,
    date,
  } = assignment || {};
  const [level, setLevel] = useState(difficultLevel);
  const convertedDate = new Date(date);
  const UpdateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const title = form.title.value;
    const marks = form.marks.value;
    const thumbnail = form.thumbnail.value;
    const difficultLevel = level;
    const description = form.description.value;
    const date = shortDate;
    const updateData = {
      email,
      title,
      marks,
      thumbnail,
      difficultLevel,
      description,
      date,
    };
    axios
      .patch(`http://localhost:5000/assignment/?id=${_id}`, updateData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Great!",
            text: "Your assignment has been updated",
            icon: "success",
            confirmButtonText: "Okay",
          });
          navigate("/assignments");
        } else {
          Swal.fire({
            title: "Error!",
            text: "Your can't update your assignment",
            icon: "error",
            confirmButtonText: "Okay",
          });
          navigate("/assignments");
        }
      });
  };
  return (
    <div className="mb-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl bg-gradient-to-r from-blue-600 via-green-500  to-indigo-400 inline-block text-transparent bg-clip-text ">
          Update Assignment
        </h1>
      </div>
      <form
        onSubmit={UpdateAssignment}
        className="bg-slate-500 p-6 rounded-lg min-w-[350px] md:min-w-[600px]"
      >
        <div className="md:flex gap-5 justify-between mb-4">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-bold">Assignment title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              className="input input-bordered focus:outline-none"
            />
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-bold">Assignment marks</span>
            </label>
            <input
              type="number"
              name="marks"
              defaultValue={marks}
              className="input input-bordered focus:outline-none "
            />
          </div>
        </div>
        <div className="md:flex gap-5 justify-between">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-bold">Assignment thumbnail</span>
            </label>
            <input
              type="url"
              name="thumbnail"
              defaultValue={thumbnailImage}
              className="input input-bordered focus:outline-none"
            />
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-bold">Difficulty level</span>
            </label>
            <select
              onChange={(e) => setLevel(e.target.value)}
              className="select w-full focus:outline-none"
              defaultValue={difficultLevel}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        <div className="md:flex gap-5 mb-4 justify-between">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-bold">
                Assignment description
              </span>
            </label>
            <textarea
              name="description"
              defaultValue={description}
              className="textarea focus:outline-none textarea-bordered textarea-md p-1 pb-3"
            ></textarea>
          </div>
          <div className="form-control flex-1 ">
            <label className="label">
              <span className="label-text font-bold">Date</span>
            </label>
            <DatePicker
              selected={convertedDate}
              className="p-3 w-full rounded-lg"
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <button type="submit" className="mt-3  btn btn-secondary">
          Update Assignment
        </button>
      </form>
    </div>
  );
};

export default UpdateAssignment;
