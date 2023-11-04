import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="menu  space-y-2 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost"
            : isActive
            ? "btn btn-error"
            : "btn btn-ghost "
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost"
            : isActive
            ? "btn btn-error "
            : "btn btn-ghost "
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost"
            : isActive
            ? "btn btn-error "
            : "btn btn-ghost "
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/order"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost"
            : isActive
            ? "btn btn-error "
            : "btn btn-ghost "
        }
      >
        Order
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost"
            : isActive
            ? "btn btn-error "
            : "btn btn-ghost "
        }
      >
        Service
      </NavLink>

      <button className="btn btn-ghost ">LogOut</button>

      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending
            ? "btn btn-ghost"
            : isActive
            ? "btn btn-error "
            : "btn btn-ghost "
        }
      >
        Login
      </NavLink>
    </div>
  );
};

export default Sidebar;
