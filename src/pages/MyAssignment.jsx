import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyAssignment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [submittedAssignment, setSubmittedAssignment] = useState([]);

  const url = `https://assignment-management-system-server-side.vercel.app/submitted-assignments/?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => setSubmittedAssignment(res.data));
  }, [axiosSecure, url]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-indigo-500 text-base font-black">SI</th>
            <th className="text-indigo-500 text-base font-black">Name</th>
            <th className="text-indigo-500 text-base font-black">
              Total Marks
            </th>
            <th className="text-indigo-500 text-base font-black">
              Obtain Marks
            </th>

            <th className="text-indigo-500 text-base font-black">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {submittedAssignment?.map((assignment, index) => {
            return (
              <tr key={assignment._id}>
                <th className="font-semibold">{index + 1}</th>
                <td className="font-semibold">{assignment?.title}</td>
                <td className="font-semibold">{assignment?.marks}</td>
                <td className="font-semibold">{assignment?.obtainMark}</td>
                <td className="font-semibold">
                  <button className="btn btn-sm text-xs bg-violet-400">
                    {assignment?.status}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyAssignment;
