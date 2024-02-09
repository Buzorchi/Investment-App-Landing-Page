import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(selectedMenu === menu ? null : menu);
  };

  return (
    <div className="relative lg:hidden ">
      {/* overflow-hidden overscroll-auto w-[704px] h-[1070px] px-10 py-10 */}
      <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div
          id="menuContent"
          className="absolute top-full left-0 mt-2 bg-gray-100 p-4"
        >
          <ul>
            <li>
              <button
                onClick={() => handleMenuClick("menu1")}
                className="text-gray-600 focus:outline-none"
              >
                Menu 1
              </button>
              {selectedMenu === "menu1" && (
                <div className="bg-gray-100 p-4">
                  {/* Content for Menu 1 */}
                  <p>Menu 1 Content...</p>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("menu2")}
                className="text-gray-600 focus:outline-none"
              >
                Menu 2
              </button>
              {selectedMenu === "menu2" && (
                <div className="bg-gray-100 p-4">
                  {/* Content for Menu 2 */}
                  <p>Menu 2 Content...</p>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("menu3")}
                className="text-gray-600 focus:outline-none"
              >
                Menu 3
              </button>
              {selectedMenu === "menu3" && (
                <div className="bg-gray-100 p-4">
                  {/* Content for Menu 3 */}
                  <p>Menu 3 Content...</p>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
