import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Container from "../Container/Container";
import Card from "../Card/Card";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    useClassNames: false,
    startEvent: "DOMContentLoaded",
});

export default function ReportQurban() {
    const position = [-6.5212, 106.2856];
    return (
        <section className="bg-[url('images/domba-grscl.jpg')] bg-center bg-cover">
            <div className="bg-white bg-opacity-25">
                <Container className="py-5">
                    <div className="flex flex-col justify-center items-center text-center gap-y-2 py-4 md:py-8 lg:py-12">
                        <h1 className="text-base font-extrabold text-amber-400 md:text-2xl lg:text-4xl">
                            TOTAL PENERIMAAN QURBAN ZAKAT SUKSES
                        </h1>
                        <em className="text-base font-bold text-white md:text-xl lg:text-2xl">
                            2023
                        </em>
                    </div>
                    <div className="peta-sebaran w-10/12 m-auto rounded-xl">
                        <MapContainer center={position} zoom={5}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[-6.5212, 106.2856]}>
                                <Popup>
                                    Badui, Banten
                                    <br />
                                    <b>Total 60 Kambing</b>
                                </Popup>
                            </Marker>
                            <Marker position={[-6.597147, 106.806038]}>
                                <Popup>
                                    Bogor, Jawa Barat
                                    <br />
                                    <b>Total 2 Sapi</b>
                                </Popup>
                            </Marker>
                            <Marker position={[-6.396358, 106.804403]}>
                                <Popup>
                                    Depok, Jawa Barat
                                    <br />
                                    <b>Total 26 Kambing, dan 7 Sapi</b>
                                </Popup>
                            </Marker>
                            <Marker position={[-7.2278, 107.9085]}>
                                <Popup>
                                    Garut, Jawa Barat
                                    <br />
                                    <b>Total 2 Sapi</b>
                                </Popup>
                            </Marker>
                            <Marker position={[-3.22371, 130.09597]}>
                                <Popup>
                                    Maluku
                                    <br />
                                    <b>Total 5 Sapi</b>
                                </Popup>
                            </Marker>
                            <Marker position={[-8.657382, 121.07937]}>
                                <Popup>
                                    NTT
                                    <br />
                                    <b>Total 86 Kambing, dan 16 Sapi</b>
                                </Popup>
                            </Marker>
                            <Marker position={[5.1521, 46.1996]}>
                                <Popup>
                                    Somalia
                                    <br />
                                    <b>
                                        Total 9 Kambing, 4 Sapi, dan 3 Sapi
                                        Patungan
                                    </b>
                                </Popup>
                            </Marker>
                            <Marker position={[-6.9237, 106.928726]}>
                                <Popup>
                                    Sukabumi, Jawa Barat
                                    <br />
                                    <b>Total 44 Kambing</b>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div
                        className="flex flex-wrap justify-center w-full m-auto items-center md:gap-x-8 p-8"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="sk py-4">
                            <Card>
                                <h2 className="inline-flex justify-center items-center font-semibold text-lg h-12 w-12 bg-gradient-to-t text-white">
                                    351
                                </h2>
                                <span className="text-center">
                                    <p>Setara Kambing</p>
                                    <strong>Qurban Pelosok Nusantara</strong>
                                </span>
                            </Card>
                        </div>
                        <div className="sk py-4">
                            <Card>
                                <h2 className="inline-flex justify-center items-center font-semibold text-lg bg-gradient-to-t text-white">
                                    89
                                </h2>
                                <span className="text-center">
                                    <p>Setara Kambing</p>
                                    <strong>Qurban Depok</strong>
                                </span>
                            </Card>
                        </div>
                        <div className="sk py-4">
                            <Card>
                                <h2 className="inline-flex justify-center items-center font-semibold text-lg h-12 w-12 bg-gradient-to-t text-white">
                                    40
                                </h2>
                                <span className="text-center">
                                    <p>Setara Kambing</p>
                                    <strong>Qurban Somalia</strong>
                                </span>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
