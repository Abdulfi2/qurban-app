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
            <section className="bg-gradient-to-tr  from-lime-700 to-lime-300 h-full">
                <div className="container mx-auto p-10">
                    <div
                        className="block text-center"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h1 className="text-gray-900 py-3 text-base font-bold md:text-lg lg:text-3xl">
                            TOTAL PENERIMAAN QURBAN ZAKAT SUKSES
                        </h1>
                        <em className="text-zinc-800 font-bold text-xs md:text-base lg:text-lg ">
                            2023
                        </em>
                        <div className="flex flex-row flex-shrink py-5 my-5 items-center gap-3 md:gap-4 lg:gap-8 lg:overflow-hidden overflow-scroll overflow-y-hidden m-auto box-border">
                            <div className="card inline-flex flex-col flex-shrink-0 md:flex-shrink md:w-1/3 bg-slate-50 bg-opacity-70 text-gray-700 overflow-hidden rounded-lg border-l-slate-400 shadow-md p-6">
                                <h2 className="py-3 text-2xl font-extrabold ">
                                    351
                                </h2>
                                <span className="py-1">Setara Kambing</span>
                                <strong className="py-1">
                                    Qurban Pelosok Nusantara
                                </strong>
                            </div>
                            <div className="card inline-flex flex-col flex-shrink-0 md:flex-shrink md:w-1/3 bg-slate-50 bg-opacity-70 text-gray-700 overflow-hidden rounded-lg border-l-slate-400 shadow-md p-6">
                                <h2 className="py-3 text-2xl font-extrabold ">
                                    351
                                </h2>
                                <span className="py-1">Setara Kambing</span>
                                <strong className="py-1">
                                    Qurban Pelosok Nusantara
                                </strong>
                            </div>
                            <div className="card inline-flex flex-col flex-shrink-0 md:flex-shrink md:w-1/3 bg-slate-50 bg-opacity-70 text-gray-700 overflow-hidden rounded-lg border-l-slate-400 shadow-md p-6">
                                <h2 className="py-3 text-2xl font-extrabold ">
                                    351
                                </h2>
                                <span className="py-1">Setara Kambing</span>
                                <strong className="py-1">
                                    Qurban Pelosok Nusantara
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
