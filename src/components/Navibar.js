// import React from 'react';
import { Link } from 'react-router-dom';
export default function Navibar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Tagging app</span>
          </a>
          <div className="flex items-center">
            <a href="tel:5541251234" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">
              (555) 412-1234
            </a>
            <Link to={'/login'}>Login</Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/gamepage'}>Levels</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
