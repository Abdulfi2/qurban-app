import Container from "../Container/Container";
import { Card } from "flowbite-react";

export default function Comment() {
    return (
        <section className="bg-gradient-to-l from-slate-50 to-sky-200">
            <Container className="overflow-hidden p-8">
                <div className="flex flex-col pb-8">
                    <h2 className="text-center font-bold text-base md:text-xl lg:text-3xl">
                        Kata Mereka Yang Berqurban
                    </h2>
                </div>
                <div className="flex flex-row justify-center h-auto text-center gap-8">
                    <Card className="overflow-hidden"></Card>
                    <Card className="overflow-hidden"></Card>
                    <Card className="overflow-hidden"></Card>
                </div>
            </Container>
        </section>
    );
}
