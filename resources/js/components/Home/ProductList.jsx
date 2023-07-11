import Container from "../Container/Container";

function IsProduct() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h4 className="card-title">Shoes!</h4>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

function Title(props) {
    const { className, text, desc } = props;
    return (
        <div className="block py-8 text-center align-middle text-white">
            <h3 className="font-bold text-base md:text-xl lg:text-4xl pb-4">
                {text}
            </h3>
            <div className="w-1/2 m-auto pb-4 hr_bor"></div>
            <span className="text-sm md:text-lg">{desc}</span>
        </div>
    );
}

export default function ProductList({}) {
    return (
        <section className="bg-gradient-to-br from-orange-500 to-amber-500">
            <Container className="py-8 px-6 md:px-8 lg:py-12">
                <Title
                    text="Qurban Pelosok Nusantara"
                    desc="Qurban Pelosok Nusantara adalah program qurban yang dilaksanakan di pedalaman/pelosok Indonesia."
                />
                <div className="w-full flex flex-wrap justify-center items-center lg:flex-nowrap lg:items-stretch gap-4">
                    <IsProduct />
                    <IsProduct />
                    <IsProduct />
                </div>
                <Title
                    text="Qurban Somalia"
                    desc="Qurban Somalia adalah program qurban yang dilaksanakan di daerah Afrika timur tepatnya daerah Somalia."
                />
                <div className="w-full flex flex-wrap justify-center items-center lg:flex-nowrap lg:items-stretch gap-4">
                    <IsProduct />
                    <IsProduct />
                    <IsProduct />
                </div>
                <Title
                    text="Qurban Depok"
                    desc="LAZ Zakat Sukses meluncurkan program Qurban Depok. Program ini akan dilaksanakan di kantor Zakat Sukses dan daging qurbannya akan didistribusikan untuk masyarakat Kota Depok dan Sekitarnya"
                />
                <div className="w-full flex flex-wrap justify-center items-center lg:flex-nowrap lg:items-stretch gap-4">
                    <IsProduct />
                    <IsProduct />
                    <IsProduct />
                </div>
            </Container>
        </section>
    );
}
