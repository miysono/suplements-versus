import { NavLink } from "react-router-dom";

const NavItem = ({ linkTo, textContent }) => {
  return (
    <NavLink
      to={linkTo}
      className={({ isActive }) =>
        isActive
          ? "py-3 border-b-2 border-y-green-700"
          : "py-3 border-b-2 border-transparent hover:border-b-2 hover:border-y-green-700"
      }
    >
      {textContent}
    </NavLink>
  );
};

export default NavItem;
