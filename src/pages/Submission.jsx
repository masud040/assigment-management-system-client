import useAuth from "../hooks/useAuth";

const Submission = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const handleSubmission = (e) => {};
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Submission from</h1>

      <form className="md:w-[60%] mx-auto">
        <div className="mb-3">
          <label className="label">
            <span className="label-text font-bold">PDF Link</span>
          </label>
          <input
            type="text"
            placeholder="pdf link"
            name="pdf"
            required
            className="input input-bordered focus:outline-none input-primary w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text font-bold">Assignment note</span>
          </label>
          <textarea
            className="textarea w-full focus:outline-none textarea-primary "
            name="note"
            required
            placeholder="note"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Submission;
