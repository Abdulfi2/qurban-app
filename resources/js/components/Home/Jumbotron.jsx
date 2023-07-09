import { Card } from "flowbite-react";
import Container from "../Container/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import { IconCaretRight } from "@tabler/icons-react";
import clsx from "clsx";

AOS.init({
    useClassNames: false,
    startEvent: "DOMContentLoaded",
});

export default function Jumbotron() {
    return (
        <section className="bg-gradient-to-l from-slate-300 to-sky-50">
            <Container className="overflow-hidden py-4 md:py-8 lg:py:12">
                <div className="flex flex-col-reverse items-stretch lg:flex-row gap-4 px-4 pb-4">
                    <div
                        className="w-full inline-flex md:justify-center lg:w-6/12"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                    >
                        <Card>
                            <img
                                src="https://qurban.zakatsukses.org/wp-content/uploads/2023/05/Picture1.png"
                                alt="placeholder"
                                loading="lazy"
                            />
                        </Card>
                    </div>
                    <div
                        className="w-full inline-flex flex-col md:justify-center lg:w-6/12"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                    >
                        <Card className="text-justify">
                            <h2 className="font-bold text-center text-sm md:text-lg lg:text-xl">
                                PEMESANAN QURBAN PELOSOK INDONESIA, QURBAN
                                DEPOK, DAN QURBAN SOMALIA
                            </h2>
                            <span className="bg-lime-800 text-white text-xs md:text-base p-4">
                                Penting: Untuk Anda yang Ingin Berqurban Tapi
                                Gak Mau Ribet Cari Hewan Sendiri, Potong
                                Sendiri, dan Melakukan Semuanya Sendiri..
                            </span>
                            <p className="text-xs md:text-base">
                                <b>QURBAN SERASI</b> adalah Program yang Tepat
                                untuk Anda. Program distribusi daging qurban
                                untuk masyakarat yang lebih membutuhkan,
                                khususnya di wilayah-wilayah yang jarang atau
                                bahkan tidak pernah tersentuh oleh daging
                                qurban.
                            </p>
                        </Card>
                        <Card className="mt-4 text-center">
                            <h2 className="font-bold text-center text-sm md:text-lg lg:text-xl">
                                KEMANA QURBAN SERASI AKAN DISALURKAN?
                            </h2>
                            <img
                                src="https://qurban.zakatsukses.org/wp-content/uploads/2023/05/Picture2.png"
                                alt="placeholder"
                                loading="lazy"
                            />
                        </Card>
                    </div>
                </div>
                <div
                    className="inline-flex flex-col gap-4 px-4 w-full"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <Card className="text-center shadow-lg overflow-hidden flex flex-col justify-center">
                        <div className="w-full">
                            <h2 className="font-bold text-center text-sm md:text-lg lg:text-xl pb-4">
                                INILAH YANG AKAN ANDA DAPATKAN JIKA IKUT PROGRAM
                                QURBAN SERASI
                            </h2>
                            <ul className="list-disc align-middle gap-y-2 text-xs py-2 px-4 md:px-6 md:text-base">
                                <Li>
                                    Distribusi hewan qurban yang tepat sasaran
                                    dengan penerima manfaat dari golongan fakir,
                                    miskin (dhuafa) hingga wilayah pelosok
                                    nusantara
                                </Li>
                                <Li>
                                    Hewan Qurban terbaik dan kualitas terjaga
                                    sesuai syariat
                                </Li>
                                <Li>
                                    Proses penyembelihan sesuai syariat, aman ,
                                    transparan
                                </Li>
                                <Li>
                                    Dokumentasi pelaporan lengkap mulai dari
                                    penyembelihan hingga pendistribusian
                                </Li>
                                <Li>Kemudahan cara dan waktu pembayaran</Li>
                                <Li>
                                    Bagian Daging hak pequrban (khusus qurban di
                                    Depok)
                                </Li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <Card className="bg-lime-500 text-white">
                                <h3 className="text-center text-sm md:text-lg lg:text-xl">
                                    Jika ingin pesan atau ingin konsultasi Bisa
                                    hubungi nomor dibawah ini: <br />
                                    <a
                                        className="hover:text-gray-900 font-semibold"
                                        href="https://wa.me/6282211627700/"
                                    >
                                        082211627700
                                    </a>
                                </h3>
                            </Card>
                        </div>
                    </Card>
                </div>
            </Container>
        </section>
    );
}

function Li(props) {
    const { className, children } = props;
    return (
        <li {...props} className={clsx(className, "text-justify")}>
            <p>{children}</p>
        </li>
    );
}
