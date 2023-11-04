import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const user = { email: "masud" };
  return (
    <div className="flex gap-2 items-center text-white">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost text-xs btn-sm"
            : isActive
            ? "btn btn-error text-xs btn-sm"
            : "btn btn-ghost text-xs btn-sm"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/assignments"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost text-xs btn-sm"
            : isActive
            ? "btn btn-error text-xs btn-sm"
            : "btn btn-ghost text-xs btn-sm"
        }
      >
        Assignments
      </NavLink>
      {user?.email ? (
        <div className="flex items-center gap-2">
          <NavLink
            to="/create-assignments"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost text-xs btn-sm"
                : isActive
                ? "btn btn-error text-xs btn-sm"
                : "btn btn-ghost  text-xs btn-sm"
            }
          >
            Create Assignments
          </NavLink>
          <NavLink
            to="/my-assignments"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost text-xs btn-sm"
                : isActive
                ? "btn btn-error text-xs btn-sm"
                : "btn btn-ghost  text-xs btn-sm"
            }
          >
            My Assignments
          </NavLink>
          <NavLink
            to="/submitted-assignments"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost text-xs btn-sm"
                : isActive
                ? "btn btn-error text-xs btn-sm"
                : "btn btn-ghost text-xs btn-sm"
            }
          >
            Submitted Assignments
          </NavLink>
          <button className="btn btn-ghost text-xs btn-sm">LogOut</button>
          <img
            title={user?.displayName}
            src="https://lh3.googleusercontent.com/a/ACg8ocLTcVaIDaosTPwL4HRx3WNqCJKi08icMAb3jUTJNxhYTw=s96-c-rg-br100"
            className="w-10 h-10"
            alt="user photo"
          />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost text-xs btn-sm"
                : isActive
                ? "btn btn-error text-xs btn-sm"
                : "btn btn-ghost text-xs btn-sm"
            }
          >
            Login
          </NavLink>
          <NavLink
            to={`/register`}
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost text-xs btn-sm"
                : isActive
                ? "btn btn-error text-xs btn-sm"
                : "btn btn-ghost text-xs btn-sm"
            }
          >
            Register
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
