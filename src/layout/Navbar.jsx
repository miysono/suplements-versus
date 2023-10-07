import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-green-700 bg-white top-0 text-md sticky overflow-x-hidden">
      <nav className="border-b-2 border-green-200 border-opacity-50">
        {/* COMPUTER LIST */}
        <ul className="hidden px-8 lg:flex items-center justify-between font-semibold text-lg">
          <NavLink to="/">
            <li className="text-green-600 tracking-tighter text-xl">
              Suplement Versus
            </li>
          </NavLink>

          <li>
            <div className="flex gap-5">
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  isActive
                    ? "py-3 border-b-2 border-y-green-700"
                    : "py-3 border-b-2 border-transparent hover:border-b-2 hover:border-y-green-700"
                }
              >
                Reviews
              </NavLink>
              <p className="py-3 border-b-2 border-transparent hover:border-b-2 hover:border-y-green-700">
                Top 10
              </p>
              <p className="py-3 border-b-2 border-transparent hover:border-b-2 hover:border-y-green-700">
                RDA List
              </p>
              <p className="py-3 border-b-2 border-transparent hover:border-b-2 hover:border-y-green-700">
                Wiki
              </p>
              <p className="py-3 border-b-2 border-transparent hover:border-b-2 hover:border-y-green-700">
                About Us
              </p>
            </div>
          </li>

          <li>
            <div className="flex gap-5">
              <p>Contact Us</p>
              <p>Sign in</p>
            </div>
          </li>
        </ul>
        {/* MOBILE LIST */}
        <ul className="flex justify-between items-center py-4 mx-5 lg:hidden">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </li>
          <li className="text-xl text-green-600 font-semibold">Logo</li>
          <li>
            <img src="/account-icon.svg" className="w-8" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
