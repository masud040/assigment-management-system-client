import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMarks = () => {
  const assignment = useLoaderData();
  const { note, pdf, _id } = assignment;
  const handleGiveMark = (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainMark = form.mark.value;
    const feedback = form.feedback.value;
    const feedBackObj = {
      obtainMark: obtainMark,
      feedback: feedback,
      status: "completed",
    };
    axios
      .patch(
        `http://localhost:5000/submitted-assignment/?id=${_id}`,
        feedBackObj
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Give mark and feedback successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-[90%] mx-auto">
      <form onSubmit={handleGiveMark}>
        <label className="label">
          <span className="label-text font-bold text-lg">PDF Link</span>
        </label>
        <a href={pdf} className="font-semibold underline">
          {pdf}
        </a>
        <label className="label">
          <span className="label-text font-bold text-lg">Note</span>
        </label>
        <p className="bg-slate-200 min-h-[100px] rounded-lg p-3">{note}</p>
        <label className="label">
          <span className="label-text font-bold text-lg">Give Mark</span>
        </label>
        <input
          type="text"
          placeholder="give mark"
          name="mark"
          className="input input-bordered focus:outline-none input-success w-full"
        />
        <label className="label">
          <span className="label-text font-bold text-lg">Feedback</span>
        </label>
        <textarea
          className="textarea focus:outline-none w-full textarea-md p-2 textarea-success"
          name="feedback"
          placeholder="feedback"
        ></textarea>
        <div className="flex justify-end">
          <button className="btn text-xs  text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-4">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GiveMarks;
