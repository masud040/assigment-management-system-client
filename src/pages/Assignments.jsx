import { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const countData = useLoaderData();

  const [level, setLevel] = useState("");
  const [perPageItem, setPerPageItem] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const total = countData.total;
  const pageCount = Math.ceil(total / perPageItem);

  const pages = [...Array(pageCount).keys()];

  useEffect(() => {
    axios
      .get(
        `https://assignment-management-system-server-side.vercel.app/assignments?difficultLevel=${level}&page=${currentPage}&size=${perPageItem}`
      )
      .then((res) => setAssignments(res.data));
  }, [currentPage, level, perPageItem]);

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePageItem = (e) => {
    setPerPageItem(e.target.value);
    setCurrentPage(0);
  };
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
      <div className="text-center my-4">
        <button
          onClick={handlePrev}
          className="btn btn-sm font-bold text-xs mr-2"
        >
          Prev
        </button>
        {pages?.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page
                ? "btn btn-sm text-xs mr-2 font-bold  bg-fuchsia-500"
                : "btn btn-sm font-bold text-xs mr-2"
            }
          >
            {page + 1}
          </button>
        ))}
        <button onClick={handleNext} className="btn btn-sm font-bold text-xs">
          Next
        </button>
        <select
          onChange={handlePageItem}
          value={perPageItem}
          className="border p-1 ml-2 rounded-md"
          id=""
        >
          <option value="5">5</option>
          <option value="9">9</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Assignments;
