import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Assignments from "../pages/Assignments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateAssignments from "../pages/CreateAssignments";
import MyAssignment from "../pages/MyAssignment";
import SubmittedAssignments from "../pages/SubmittedAssignments";

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
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "create-assignments",
        element: <CreateAssignments />,
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
]);
export default route;
