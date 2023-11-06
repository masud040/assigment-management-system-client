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
import NotFound from "../pages/NotFound";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch("http://localhost:5000/features", { credentials: "include" }),
      },
      {
        path: "assignments",
        element: <Assignments />,
        loader: () => fetch("http://localhost:5000/count"),
      },
      {
        path: "viewAssignment/:id",
        element: (
          <PrivateRoute>
            <ViewAssignment />
          </PrivateRoute>
        ),
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
        path: "my-assignments",
        element: (
          <PrivateRoute>
            <MyAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "submitted-assignments",
        element: (
          <PrivateRoute>
            <SubmittedAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "update-assignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/giveMarks/:id",
        element: (
          <PrivateRoute>
            <GiveMarks />
          </PrivateRoute>
        ),
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
