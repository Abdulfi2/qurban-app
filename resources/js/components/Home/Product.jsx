import { Link } from "@inertiajs/react";
import Container from "../Container/Container";
import Card from "../Card/Card";

export default function (props) {
    return (
        // <section className="bg-gradient-to-l from-slate-300 to-sky-50">
        //     <div className="bg-gradient-to-bl from-amber-400 to-orange-400 overflow-hidden layer2">
        //         <Container className="py-12 px-8 align-middle">
        //             <div className="block gap-y-12 w-full h-auto text-center text-white">
        //                 <div className="product flex flex-col justify-center items-center gap-y-4 py-4">
        //                     <h3 className="text-5xl font-bold">
        //                         Qurban Pelosok Nusantara
        //                     </h3>
        //                     <p className="text-lg">
        //                         Qurban Pelosok Nusantara adalah program qurban
        //                         yang dilaksanakan di pedalaman/pelosok
        //                         Indonesia.
        //                     </p>
        //                     <div className="inline-flex flex-row gap-x-4">
        //                         {Object.values(data).map((item) => (
        //                             <Card key={item.id}>
        //                                 {item.sold_out === "yes" ? (
        //                                     <a className="card-img">
        //                                         <img
        //                                             src={`{{asset('wp-content/uploads/2022/06/' . ${item.galleries[0].image})}}`}
        //                                         />
        //                                         <span className="sold-out">
        //                                             Sold Out
        //                                         </span>
        //                                     </a>
        //                                 ) : (
        //                                     <a
        //                                         href={`{{'/detail/' . ${item.slug}}}`}
        //                                         className="card-img"
        //                                     >
        //                                         <img
        //                                             src={`{{asset('wp-content/uploads/2022/06/' . ${item.galleries[0].image})}}`}
        //                                         />
        //                                     </a>
        //                                 )}
        //                                 <a
        //                                     href={`{{'/detail/' . ${item.slug}}}`}
        //                                     className="card-body"
        //                                 >
        //                                     <h4>Kambing</h4>
        //                                     <p>{item.berat}</p>
        //                                     <p>
        //                                         Rp.{" "}
        //                                         {numberFormat(
        //                                             item.harga,
        //                                             0,
        //                                             ".",
        //                                             "."
        //                                         )}
        //                                     </p>
        //                                     {item.diskon &&
        //                                         item.diskon !== 0 && (
        //                                             <span
        //                                                 style={{
        //                                                     textDecoration:
        //                                                         "line-through",
        //                                                 }}
        //                                             >
        //                                                 {"Rp" +
        //                                                     numberFormat(
        //                                                         item.diskon,
        //                                                         0,
        //                                                         ".",
        //                                                         "."
        //                                                     )}
        //                                             </span>
        //                                         )}
        //                                 </a>
        //                             </Card>
        //                         ))}
        //                         <Card></Card>
        //                         <Card></Card>
        //                     </div>
        //                 </div>
        //                 <div className="product flex flex-col justify-center items-center gap-y-4 py-4">
        //                     <h3 className="text-5xl font-bold">
        //                         Qurban Somalia
        //                     </h3>
        //                     <p>
        //                         Qurban Somalia adalah program qurban yang
        //                         dilaksanakan di daerah Afrika timur tepatnya
        //                         daerah Somalia.
        //                     </p>
        //                     <div className="inline-flex flex-row gap-x-4">
        //                         <Card></Card>
        //                         <Card></Card>
        //                         <Card></Card>
        //                     </div>
        //                 </div>
        //                 <div className="product flex flex-col justify-center items-center gap-y-4 py-4">
        //                     <h3 className="text-5xl font-bold">Qurabn Depok</h3>
        //                     <p>
        //                         LAZ Zakat Sukses meluncurkan program Qurban
        //                         Depok. Program ini akan dilaksanakan di kantor
        //                         Zakat Sukses dan daging qurbannya akan
        //                         didistribusikan untuk masyarakat Kota Depok dan
        //                         Sekitarnya
        //                     </p>
        //                     <div className="inline-flex flex-row gap-x-4">
        //                         <Card></Card>
        //                         <Card></Card>
        //                         <Card></Card>
        //                     </div>
        //                 </div>
        //             </div>
        //         </Container>
        //     </div>
        // </section>
    );
}
