import Navbar from "../components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Homepage() {
    return (
        <>
            <Head title="Qurban Serasi - Kolaborasi Qurban Untuk Negeri" />
            <Navbar />
            <img
                className="h-auto max-w-full"
                src="images/header.png"
                alt="placeholder"
            />
            <section className="bg-[url('images/background-grayscale.png')] h-full">
                <div className="bg-white bg-opacity-50">
                    <div className="container mx-auto p-10">
                        <div
                            className="block text-center"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <h1 className="text-lime-700 py-3 text-base font-extrabold md:text-lg lg:text-3xl">
                                TOTAL PENERIMAAN QURBAN ZAKAT SUKSES
                            </h1>
                            <em className="text-lime-900 font-bold text-xs md:text-base lg:text-lg ">
                                2023
                            </em>
                            <div className="flex flex-row flex-shrink p-2 my-5 gap-5 md:gap-4 lg:gap-8 lg:overflow-hidden overflow-scroll overflow-y-hidden m-auto box-border">
                                <div className="card inline-flex flex-col flex-shrink-0 w-11/12 md:flex-shrink md:w-1/3 bg-slate-50 bg-opacity-90 text-gray-700 overflow-hidden rounded-lg border-l-slate-400 shadow-md p-6">
                                    <div className="flex flex-row items-center justify-between gap-4">
                                        <h2 className="bg-gradient-to-tl from-orange-200 to-orange-500 top-20 p-3 rounded-xl inline-flex items-center justify-center py-3 text-2xl font-extrabold ">
                                            351
                                        </h2>
                                        <strong className="py-1">
                                            Pelosok Nusantara
                                        </strong>
                                    </div>
                                </div>
                                <div className="card inline-flex flex-col flex-shrink-0 w-10/12 md:flex-shrink md:w-1/3 bg-slate-50 bg-opacity-90 text-gray-700 overflow-hidden rounded-lg border-l-slate-400 shadow-md p-6">
                                    <div className="flex flex-row items-center justify-between gap-2">
                                        <h2 className="bg-gradient-to-tl from-orange-200 to-orange-500 top-20 p-3 rounded-xl inline-flex items-center justify-center py-3 text-2xl font-extrabold ">
                                            89
                                        </h2>
                                        <strong className="py-1">Depok</strong>
                                    </div>
                                </div>
                                <div className="card inline-flex flex-col flex-shrink-0 w-10/12 md:flex-shrink md:w-1/3 bg-slate-50 bg-opacity-90 text-gray-700 overflow-hidden rounded-lg border-l-slate-400 shadow-md p-6">
                                    <div className="flex flex-row items-center justify-between gap-2">
                                        <h2 className="bg-gradient-to-tl from-orange-200 to-orange-500 top-20 p-3 rounded-xl inline-flex items-center justify-center py-3 text-2xl font-extrabold ">
                                            40
                                        </h2>
                                        <strong className="py-1">
                                            Somalia
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-tr from-orange-500 to-orange-100 h-full">
                <div className="container mx-auto p-10"></div>
            </section>
        </>
    );
}
