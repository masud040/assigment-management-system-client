import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const CreateAssignments = () => {
  const { user } = useAuth();

  const [startDate, setStartDate] = useState(new Date());
  const [level, setLevel] = useState("");
  const shortDate = new Date(startDate).toDateString();
  const AddAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const title = form.title.value;
    const marks = form.marks.value;
    const thumbnailImage = form.thumbnail.value;
    const difficultLevel = level;
    const description = form.description.value;
    const date = shortDate;
    const assignment = {
      email,
      title,
      marks,
      thumbnailImage,
      difficultLevel,
      description,
      date,
    };

    axios
      .post(
        `https://assignment-management-system-server-side.vercel.app/create-assignment/?email=${user.email}`,
        {
          assignment,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Great!",
            text: "Your assignment has been created",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="mb-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl bg-gradient-to-r from-blue-600 via-green-500  to-indigo-400 inline-block text-transparent bg-clip-text ">
          Create An Assignment
        </h1>
      </div>
      <form
        onSubmit={AddAssignment}
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
              required
              placeholder="Assignment title"
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
              placeholder="Assignment marks"
              required
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
              placeholder="Thumbnail URL"
              required
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
              required
            >
              <option disabled selected>
                Select level
              </option>
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
              placeholder="Assignment description"
              name="description"
              required
              className="textarea focus:outline-none textarea-bordered textarea-md p-1 pb-3"
            ></textarea>
          </div>
          <div className="form-control flex-1 ">
            <label className="label">
              <span className="label-text font-bold">Date</span>
            </label>
            <DatePicker
              required
              className="p-3 w-full rounded-lg"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <button type="submit" className="mt-3  btn btn-secondary">
          Add Assignment
        </button>
      </form>
    </div>
  );
};

export default CreateAssignments;
