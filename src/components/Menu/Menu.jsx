import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>

      <div className="fixed top-0 z-10 navbar bg-base-100 shadow-sm flex-wrap p-8 flex justify-between">

        <div>
          <div>
            <Link
              className="text-xl font-extrabold mb-2"
              to="/">
              Hotel Gestor
            </Link>
          </div>

          <label className="input mt-2">
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

        <div>
          <ul className="menu menu-horizontal flex space-x-4">
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
                className="btn btn-outline btn-accent font-extrabold"
                to="/booking">
                Booking
              </Link>
            </li>
          </ul>
        </div>

      </div>

    </>
  );
}
