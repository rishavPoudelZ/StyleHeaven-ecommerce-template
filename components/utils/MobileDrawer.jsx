"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import  Link  from "next/link";

const MobileDrawer = () => {
  // Add your component logic here

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer-4");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="drawer drawer-end z-20">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-none border-none">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button">
          <FaBars className="text-2xl hover:cursor-pointer transition-all duration-300" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={closeDrawer}
        ></label>
        <ul className="menu bg-neutral-800 min-h-full w-80 p-4 text-neutral-content">
          {/* Sidebar content here */}
          <li className="flex flex-row justify-between">
            <h1 className="text-2xl font-bold">Menu</h1>
            <button
              className="text-2xl drawer-open"
              aria-label="close sidebar"
              onClick={closeDrawer}
            >
              <FaTimes />
            </button>
          </li>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/products'>Products</Link>
          </li>
          <li>
            <Link href='/faq'>FAQ</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileDrawer;
