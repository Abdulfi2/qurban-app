import { Link } from "@inertiajs/react";
import Container from "../Container/Container";
import Card from "../Card/Card";

export default function () {
    return (
        <section className="bg-gradient-to-l from-slate-300 to-sky-50">
            <div className="bg-gradient-to-bl from-amber-400 to-orange-400 overflow-hidden layer2">
                <Container className="py-12 px-8 align-middle">
                    <div className="block gap-y-12 w-full h-auto text-center text-white">
                        <div className="product flex flex-col justify-center items-center gap-y-4 py-4">
                            <h3 className="text-5xl font-bold">
                                Qurban Pelosok Nusantara
                            </h3>
                            <p className="text-lg">
                                Qurban Pelosok Nusantara adalah program qurban
                                yang dilaksanakan di pedalaman/pelosok
                                Indonesia.
                            </p>
                            <div className="inline-flex flex-row gap-x-4">
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                            </div>
                        </div>
                        <div className="product flex flex-col justify-center items-center gap-y-4 py-4">
                            <h3 className="text-5xl font-bold">
                                Qurban Somalia
                            </h3>
                            <p>
                                Qurban Somalia adalah program qurban yang
                                dilaksanakan di daerah Afrika timur tepatnya
                                daerah Somalia.
                            </p>
                            <div className="inline-flex flex-row gap-x-4">
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                            </div>
                        </div>
                        <div className="product flex flex-col justify-center items-center gap-y-4 py-4">
                            <h3 className="text-5xl font-bold">Qurabn Depok</h3>
                            <p>
                                LAZ Zakat Sukses meluncurkan program Qurban
                                Depok. Program ini akan dilaksanakan di kantor
                                Zakat Sukses dan daging qurbannya akan
                                didistribusikan untuk masyarakat Kota Depok dan
                                Sekitarnya
                            </p>
                            <div className="inline-flex flex-row gap-x-4">
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
