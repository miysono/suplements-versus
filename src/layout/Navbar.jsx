import NavItem from "./components/NavItem";

const Navbar = () => {
  return (
    <header className="text-green-700 bg-white top-0 text-md sticky overflow-x-hidden">
      <nav className="border-b-2 border-green-200 border-opacity-50">
        {/* COMPUTER LIST */}
        <ul className="hidden px-8 lg:flex items-center justify-between font-semibold text-lg">
          <li className="text-xl">
            <NavItem linkTo="/" textContent="Supplements Versus" />
          </li>

          <li>
            <div className="flex gap-5">
              <NavItem linkTo="/reviews" textContent="Reviews" />
              <NavItem linkTo="/top-10" textContent="Top 10" />
              <NavItem linkTo="/rda-list" textContent="RDA List" />
              <NavItem linkTo="/wiki" textContent="Wiki" />
              <NavItem linkTo="/about-us" textContent="About us" />
            </div>
          </li>

          <li>
            <div className="flex gap-5">
              <NavItem linkTo="/contact-us" textContent="Contact us" />
              <NavItem linkTo="/login" textContent="Sign in" />
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
