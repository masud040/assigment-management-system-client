import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "../components/AssignmentCard";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [level, setLevel] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/assignments?difficultLevel=${level}`)
      .then((res) => setAssignments(res.data));
  }, [level]);
  return (
    <div>
      <div className="flex justify-end mb-5">
        <select
          onChange={(e) => setLevel(e.target.value)}
          defaultValue={level}
          className="select select-info focus:outline-none"
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6">
        {assignments?.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
            assignments={assignments}
            setAssignments={setAssignments}
          />
        ))}
      </div>
    </div>
  );
};

export default Assignments;
