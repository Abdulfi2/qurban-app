import { Card } from "flowbite-react";
import Container from "../Container/Container";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    useClassNames: false,
    startEvent: "DOMContentLoaded",
});

export default function Jumbotron() {
    return (
        <section className="bg-gradient-to-bl from-slate-200 to-sky-50">
            <Container>
                <div className="flex flex-col-reverse lg:flex-row  gap-4 p-8">
                    <div
                        className="w-full inline-flex lg:w-6/12"
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
                        className="w-full inline-flex flex-col lg:w-6/12"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                    >
                        <Card className="text-justify">
                            <h2 className="font-bold text-center">
                                PEMESANAN QURBAN PELOSOK INDONESIA, QURBAN
                                DEPOK, DAN QURBAN SOMALIA
                            </h2>
                            <span className="bg-lime-800 text-white p-4">
                                Penting: Untuk Anda yang Ingin Berqurban Tapi
                                Gak Mau Ribet Cari Hewan Sendiri, Potong
                                Sendiri, dan Melakukan Semuanya Sendiri..
                            </span>
                            <p>
                                <b>QURBAN SERASI</b> adalah Program yang Tepat
                                untuk Anda. Program distribusi daging qurban
                                untuk masyakarat yang lebih membutuhkan,
                                khususnya di wilayah-wilayah yang jarang atau
                                bahkan tidak pernah tersentuh oleh daging
                                qurban.
                            </p>
                        </Card>
                        <Card className="mt-4 text-center">
                            <h2 className="font-bold">
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
            </Container>
        </section>
    );
}
