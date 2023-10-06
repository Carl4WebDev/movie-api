import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Footer =Footer => {
  return (
    
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a target="_blank" className="mr-4 hover:underline md:mr-6" rel="noreferrer">Socrates</a>
            </li>
            <li>
                <a target="_blank" className="mr-4 hover:underline md:mr-6" rel="noreferrer">Plato</a>
            </li>
            <li>
                <a target="_blank" className="mr-4 hover:underline md:mr-6" rel="noreferrer">Aurelius</a>
            </li>
            <li>
                <a target="_blank" className="hover:underline" rel="noreferrer">Peterson</a>
            </li>
        </ul>
        </div>
    </footer>

  )
}
