import React from "react";
import StyledNavbar from "./Navbar.styled";
import { IconMenu2 } from "@tabler/icons-react";
// import { IconMenu2 } from "@tabler/icons-react";

export default function Navbar() {
    const toggleNavbar = () => {
        const navbarMultiLevel = document.getElementById("navbar-multi-level");
        navbarMultiLevel.classList.toggle("hidden");
    };

    const toggleDropdown = () => {
        const dropdownNavbar = document.getElementById("dropdownNavbar");
        dropdownNavbar.classList.toggle("hidden");
    };

    return (
        <StyledNavbar className="shadow-lg">
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <a href="#" className="flex items-center gap-2">
                        <img src="images/favicon.png" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Zakat Sukses
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-multi-level"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-multi-level"
                        aria-expanded="false"
                        onClick={toggleNavbar}
                    >
                        <IconMenu2 />
                    </button>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-multi-level"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-white md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-white md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Form Qurban
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-white md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Tabungan
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-white md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-white md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Program
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-white md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Galeri
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </StyledNavbar>
    );
}
