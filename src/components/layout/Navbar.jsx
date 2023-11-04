import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const user = { email: "masud" };
  return (
    <div className="flex gap-3">
      {/* Navbar menu content here */}

      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost btn-sm"
            : isActive
            ? "btn btn-error btn-sm"
            : "btn btn-ghost btn-sm"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/assignments"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost btn-sm"
            : isActive
            ? "btn btn-error btn-sm"
            : "btn btn-ghost btn-sm"
        }
      >
        Assignments
      </NavLink>
      {user?.email ? (
        <div className="flex gap-3">
          <NavLink
            to="/create-assignments"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost btn-sm"
                : isActive
                ? "btn btn-error btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Create Assignments
          </NavLink>
          <NavLink
            to="/my-assignments"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost btn-sm"
                : isActive
                ? "btn btn-error btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            My Assignments
          </NavLink>
          <NavLink
            to="/submitted-assignments"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost btn-sm"
                : isActive
                ? "btn btn-error btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Submitted Assignments
          </NavLink>
          <button className="btn btn-ghost btn-sm">LogOut</button>{" "}
        </div>
      ) : (
        <div className="flex gap-3">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost btn-sm"
                : isActive
                ? "btn btn-error btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Login
          </NavLink>
          <NavLink
            to={`/register`}
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-ghost btn-sm"
                : isActive
                ? "btn btn-error btn-sm"
                : "btn btn-ghost btn-sm"
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
