import AOS from "aos";
import "aos/dist/aos.css";
import StyledHome from "./Home.styled";
import clsx from "clsx";

AOS.init();

export default function Home() {
    return (
        <StyledHome>
            <IMG src="images/header.png" alt="placeholder" />
            <section className="bg-[url('images/domba-grscl.jpg')] bg-center bg-cover">
                <div className="bg-white bg-opacity-20">
                    <Container className="py-5">
                        <div className="flex flex-col justify-center items-center text-center gap-y-2 py-4 md:py-8 lg:py-12">
                            <h1 className="text-base font-extrabold text-amber-500 md:text-2xl lg:text-4xl">
                                TOTAL PENERIMAAN QURBAN ZAKAT SUKSES
                            </h1>
                            <em className="text-base font-bold text-white md:text-xl lg:text-2xl">
                                2023
                            </em>
                        </div>
                        <div className="flex flex-row justify-start overflow-scroll overflow-y-hidden items-center gap-x-4 p-4 lg:overflow-hidden lg:justify-center">
                            <div className="sk w-full py-4 md:w-4/12 lg:w-3/12">
                                <Card>
                                    <h2 className="inline-flex justify-center items-center font-semibold text-lg h-12 w-12 bg-gradient-to-t text-white">
                                        351
                                    </h2>
                                    <span className="text-center">
                                        <p>Setara Kambing</p>
                                        <strong>
                                            Qurban Pelosok Nusantara
                                        </strong>
                                    </span>
                                </Card>
                            </div>
                            <div className="sk w-full py-4 md:w-4/12 lg:w-3/12">
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
                            <div className="sk w-full py-4 md:w-4/12 lg:w-3/12">
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
        </StyledHome>
    );
}

function Container(props) {
    const { className } = props;
    return (
        <div
            {...props}
            className={clsx(
                className,
                "container mx-auto place-content-center"
            )}
        ></div>
    );
}

function IMG(props) {
    const { src, alt } = props;
    return <img {...props} />;
}

function Card(props) {
    const { className = "bg-white", children } = props;
    return (
        <div
            {...props}
            className={clsx(
                className,
                "card bg-opacity-70 flex flex-col items-center justify-center rounded shadow-lg p-4"
            )}
        >
            {children}
        </div>
    );
}
