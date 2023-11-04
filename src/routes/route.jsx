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
        path: "create-assignments",
        element: (
          <PrivateRoute>
            <CreateAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "my-assignments",
        element: <MyAssignment />,
      },
      {
        path: "submitted-assignments",
        element: <SubmittedAssignments />,
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
