import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import useAxiosSecure from "../hooks/useAxiosSecure";

const SubmittedAssignments = () => {
  const [assignments, setAssignments] = useState();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const url = `https://assignment-management-system-server-side.vercel.app/submitted-assignments?status=pending&email=${user.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => setAssignments(res.data));
  }, [url, axiosSecure]);

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
