import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const SubmittedAssignments = () => {
  const submittedAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(submittedAssignments);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-indigo-500 text-base font-black">SI</th>
            <th className="text-indigo-500 text-base font-black">Name</th>
            <th className="text-indigo-500 text-base font-black">Marks</th>
            <th className="text-indigo-500 text-base font-black">
              Examinee name
            </th>
            <th className="text-indigo-500 text-base font-black">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {assignments?.map((assignment, index) => {
            return (
              <tr key={assignment._id}>
                <th className="font-semibold">{index + 1}</th>
                <td className="font-semibold">{assignment?.title}</td>
                <td className="font-semibold">{assignment?.marks}</td>
                <td className="font-semibold">{assignment?.examinee_name}</td>
                <td className="font-semibold">{assignment?.status}</td>
                <td>
                  <Link
                    to={`/giveMarks/${assignment._id}`}
                    className="btn btn-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[10px]"
                  >
                    give mark
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SubmittedAssignments;
