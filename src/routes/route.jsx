import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Assignments from "../pages/Assignments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateAssignments from "../pages/CreateAssignments";
import MyAssignment from "../pages/MyAssignment";
import SubmittedAssignments from "../pages/SubmittedAssignments";
import PrivateRoute from "./PrivateRoute";
import ViewAssignment from "../pages/ViewAssignment";
import UpdateAssignment from "../pages/UpdateAssignment";
import GiveMarks from "../pages/GiveMarks";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "assignments",
        element: <Assignments />,
      },
      {
        path: "viewAssignment/:id",
        element: (
          <PrivateRoute>
            <ViewAssignment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignment/${params.id}`),
      },

      {
        path: "create-assignments",
        element: (
          <PrivateRoute>
            <CreateAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "my-assignments/:email",
        element: (
          <PrivateRoute>
            <MyAssignment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/submitted-assignments?email=${params.email}`
          ),
      },
      {
        path: "submitted-assignments",
        element: (
          <PrivateRoute>
            <SubmittedAssignments />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("http://localhost:5000/submitted-assignments?status=pending"),
      },
      {
        path: "update-assignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignment/${params.id}`),
      },
      {
        path: "/giveMarks/:id",
        element: (
          <PrivateRoute>
            <GiveMarks />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/submitted-assignment/?id=${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default route;
