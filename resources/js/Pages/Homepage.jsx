import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import { Head } from "@inertiajs/react";

export default function Homepage(props) {
    return (
        <>
            <Head title="Qurban Serasi - Kolaborasi Qurban Untuk Negeri" />
            <Navbar />
            <Home />
            <Footer />
        </>
    );
}
