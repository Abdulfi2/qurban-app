import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <>
            <nav className="bg-sky-950 p-3">
                <div className="container flex flex-row justify-between">
                    <h1>Zakat Sukses</h1>
                    <div className="flex justify-end">
                        <Link
                            href={route("login")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
