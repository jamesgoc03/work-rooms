import { Link } from "react-router-dom";
import { useState } from "react";

export function Menu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSearch = async (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${searchQuery}`, {
          headers: {
            Authorization: "bWEmIQhKE1eQO4qjiFjmj8mVw6suIcPUYKQKtBqyRXqmPXFxh9xENS7l",
          },
        });
        const data = await response.json();
        setImages(data.photos || []);
        setShowOverlay(true);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim() === "") {
      setShowOverlay(false);
      setImages([]);
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm py-4 px-6 min-w-xs fixed top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
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
                <input
                  type="search"
                  className="grow"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleInputChange}
                  onKeyDown={handleSearch}
                />
              </label>
              <li>
                <Link className="btn btn-outline" to="/home">Home</Link>
              </li>
              <li>
                <Link className="btn btn-outline" to="/spaces">Spaces</Link>
              </li>
              <li>
                <Link className="btn btn-outline" to="/booking">Booking</Link>
              </li>
            </ul>
          </div>
          <Link className="text-lg font-extrabold text-nowrap" to="/">Work Rooms</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="btn btn-outline" to="/home">Home</Link>
            </li>
            <li>
              <Link className="btn btn-outline mx-2" to="/spaces">Spaces</Link>
            </li>
            <li>
              <Link className="btn btn-outline" to="/booking">Booking</Link>
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
            <input
              type="search"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleSearch}
            />
          </label>
        </div>
      </div>

      {showOverlay && (
        <div className="fixed g-white/30 backdrop-blur-md inset-0 bg-opacity-50 z-20 flex justify-center items-center h-11/12 top-20 overflow-scroll">
          <div className="p-4 rounded-lg shadow-lg max-w-4xl w-full overflow-scroll fixed top-1">
            <button
              className="fixed top-4 right-4 btn btn-accent"
              onClick={() => setShowOverlay(false)}>
              Close
            </button>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.src.medium}
                  alt={image.alt}
                  className="rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
