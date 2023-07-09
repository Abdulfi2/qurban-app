import { Card } from "flowbite-react";
import Container from "../Container/Container";

export default function Rekening() {
    return (
        <section className="bg-gradient-to-r from-sky-50 to-emerald-200">
            <Container className="overflow-hidden p-8">
                <div className="flex flex-col pb-8">
                    <h2 className="text-center font-bold text-base md:text-xl lg:text-3xl">
                        Kata Mereka Yang Berqurban
                    </h2>
                </div>
                <div className="flex flex-row justify-center h-auto text-center gap-8">
                    <Card className="overflow-hidden w-4/5">
                        <img
                            src="https://qurban.zakatsukses.org/wp-content/uploads/2023/05/norek.png"
                            alt="Rekening Zakat Sukses"
                            loading="lazy"
                        />
                    </Card>
                    <Card className="overflow-hidden w-1/4">
                        <img
                            src="https://qurban.zakatsukses.org/wp-content/uploads/2020/07/QR-All-in-one-BSM-218x300.png"
                            alt="Qr Code"
                            loading="lazy"
                        />
                    </Card>
                </div>
            </Container>
        </section>
    );
}
