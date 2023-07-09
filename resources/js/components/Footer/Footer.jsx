import { Link } from "@inertiajs/react";
import Container from "../Container/Container";

export default function Footer() {
    return (
        <footer>
            <Container>
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="align-middle gap-x-12 md:flex md:justify-between">
                        <div class="w-2/4 mb-6 md:mb-0">
                            <a
                                href="https://qurban.zakatsukses.org/"
                                class="flex items-center py-4"
                            >
                                <img
                                    src="images/favicon.png"
                                    class="h-8 mr-3"
                                    alt="Zakat Sukses Logo"
                                />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    Zakat Sukses
                                </span>
                            </a>
                            <p>
                                Zakat Sukses merupakan lembaga amil zakat yang
                                fokus pada program sosial dan pemberdayaan
                                masyarakat dhuafa. Didirikan dalam bentuk badan
                                hukum yayasan dengan akte pendirian No. 01
                                tanggal 02 Mei 2011, Notaris Nur Qomsah Sukarno,
                                S.H. dan telah mendapatkan izin operasional
                                sebagai lembaga amil zakat dari Kementerian
                                Agama Provinsi Jawa Barat No. 1082 Tahun 2017.
                            </p>
                        </div>
                        <div className="w-1/4 mb-6 md:mb-0 flex justify-start flex-col py-4">
                            <h5 className="font-bold text-lg">Alamat</h5>
                            <ul>
                                <li>
                                    <p>
                                        Jl. K.H.M. Yusuf Raya No.95, Mekar Jaya,
                                        Kec. Sukmajaya, Kota Depok, Jawa Barat
                                        16411
                                    </p>
                                </li>
                                <li>
                                    <a
                                        className="text-orange-600 hover:underline hover:text-lime-600"
                                        href="https://wa.me/6282211627700/"
                                    >
                                        0822-1162-7700
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-orange-600 hover:underline hover:text-lime-600"
                                        href="mailto:official@zakatsukses.org"
                                    >
                                        official@zakatsukses.org
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/4 mb-6 md:mb-0 flex justify-start flex-col py-4">
                            <h5 className="font-bold text-lg">Tentang Kami</h5>
                            <ul>
                                <li>
                                    <a
                                        className="font-medium hover:underline hover:text-lime-600"
                                        href="https://zakatsukses.org/profile-zakat-sukses/"
                                    >
                                        Profile Kami
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="font-medium hover:underline hover:text-lime-600"
                                        href="https://zakatsukses.org/manajemen/"
                                    >
                                        Manajemen
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="font-medium hover:underline hover:text-lime-600"
                                        href="https://zakatsukses.org/penghargaan/"
                                    >
                                        Penghargaan
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="font-medium hover:underline hover:text-lime-600"
                                        href="https://zakatsukses.org/manajemen/salam-dari-direktur/"
                                    >
                                        Salam Dari Direktur
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="font-medium hover:underline hover:text-lime-600"
                                        href="https://zakatsukses.org/manajemen/kebijakan-mutu/"
                                    >
                                        Kebijakan
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
                    <div className="align-middle gap-x-12 md:flex md:justify-between">
                        <div className="flex items-center w-2/4">
                            <h6 className="">
                                All content ©2022
                                <a
                                    className="px-1 text-orange-500 font-bold hover:text-lime-500 hover:underline"
                                    href="http://zakatsukses.org"
                                >
                                    Zakat Sukses
                                </a>
                                , Some Right Reserved.
                            </h6>
                        </div>
                        <div className="flex items-center w-2/4">
                            <ul className="flex justify-end gap-x-4">
                                <li>
                                    <Link
                                        className="font-semibold hover:underline hover:text-lime-600"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-semibold hover:underline hover:text-lime-600"
                                        to="/Menu/FormQurban"
                                    >
                                        Form Qurban
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-semibold hover:underline hover:text-lime-600"
                                        to="/Menu/Tabungan"
                                    >
                                        Tabungan
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-semibold hover:underline hover:text-lime-600"
                                        to="/Menu/Faq"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-semibold hover:underline hover:text-lime-600"
                                        to="/Menu/Program"
                                    >
                                        Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-semibold hover:underline hover:text-lime-600"
                                        to="/Menu/Galeri"
                                    >
                                        Galeri
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
