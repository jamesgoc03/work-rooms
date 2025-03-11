import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm py-4 px-6 min-w-xs fixed top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-y-2">
              <label className="input flex md:hidden">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" />
              </label>
              <li>
                <Link
                  className="btn btn-outline"
                  to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-outline"
                  to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-outline"
                  to="/booking">
                  Booking
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className="text-lg font-extrabold text-nowrap"
            to="/">
            Hotel Gestor
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className="btn btn-outline"
                to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-outline mx-2"
                to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-outline"
                to="/booking">
                Booking
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
          </label>
        </div>
      </div>
    </>
  );
}
