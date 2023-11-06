import { useLoaderData } from "react-router-dom";
import detailsThumbnail from "../assets/images/assignmentDetails.jpeg";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ViewAssignment = () => {
  const assignment = useLoaderData();
  const { user } = useAuth();

  const { title, marks, thumbnailImage, difficultLevel, description, date } =
    assignment || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const pdf = form.pdf.value;
    const note = form.note.value;

    const submittedAssignment = {
      email: user?.email,
      title,
      marks,
      examinee_name: user?.displayName,
      status: "pending",
      pdf: pdf,
      note: note,
    };
    axios
      .post("http://localhost:5000/submit-assignment", submittedAssignment)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Success",
            text: "Assignment submitted successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <form
          method="dialog"
          onSubmit={handleSubmit}
          className=" w-[400px]  md:w-[500px]"
        >
          <div className="modal-box w-11/12 max-w-5xl">
            <label className="label">
              <span className="font-bold label-text">PDF URL</span>
            </label>
            <input
              type="text"
              name="pdf"
              className="input focus:outline-none input-info w-full"
              placeholder="Enter PDF URL"
              required
            />
            <label className="label">
              <span className="font-bold label-text mt-4">Note</span>
            </label>
            <textarea
              name="note"
              className="textarea focus:outline-none textarea-info w-full textarea-md "
              placeholder="Enter a note"
            ></textarea>

            <div className=" flex justify-end gap-3 mt-6">
              <form method="dialog">
                <button className="btn btn-error text-xs">Close</button>
              </form>
              <button
                type="submit"
                className="btn text-white text-xs bg-gradient-to-r from-violet-500 to-fuchsia-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </dialog>
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
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="btn mt-4 text-sm text-white bg-gradient-to-r from-violet-500 to-fuchsia-500"
            >
              Take assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAssignment;
