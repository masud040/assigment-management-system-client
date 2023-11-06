import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { logoutUser, user } = useAuth();
  const handleLogout = () => {
    logoutUser().then(() => toast.success("Log out successfully"));
  };
  return (
    <div className="menu  space-y-2 w-80 min-h-full bg-base-200">
      {" "}
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost text-xs"
            : isActive
            ? "btn btn-error text-xs "
            : "btn btn-ghost text-xs "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/assignments"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost text-xs "
            : isActive
            ? "btn btn-error text-xs "
            : "btn btn-ghost text-xs "
        }
      >
        Assignments
      </NavLink>
      {user?.email ? (
        <div className="flex flex-col gap-2">
          <NavLink
            to="/create-assignments"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost text-xs "
                : isActive
                ? "btn btn-error text-xs "
                : "btn btn-ghost  text-xs "
            }
          >
            Create Assignments
          </NavLink>
          <NavLink
            to={`/my-assignments`}
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost text-xs "
                : isActive
                ? "btn btn-error text-xs "
                : "btn btn-ghost  text-xs "
            }
          >
            My Assignments
          </NavLink>
          <NavLink
            to="/submitted-assignments"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost text-xs "
                : isActive
                ? "btn btn-error text-xs "
                : "btn btn-ghost text-xs "
            }
          >
            Submitted Assignments
          </NavLink>
          <button onClick={handleLogout} className="btn btn-ghost text-xs ">
            LogOut
          </button>{" "}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost text-xs "
                : isActive
                ? "btn btn-error text-xs "
                : "btn btn-ghost text-xs "
            }
          >
            Login
          </NavLink>
          <NavLink
            to={`/register`}
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost text-xs "
                : isActive
                ? "btn btn-error text-xs "
                : "btn btn-ghost text-xs "
            }
          >
            Register
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
