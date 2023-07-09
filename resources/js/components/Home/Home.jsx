import AOS from "aos";
import "aos/dist/aos.css";
import StyledHome from "./Home.styled";
import "leaflet/dist/leaflet.css";
import ReportQurban from "./ReportQurban";
import Jumbotron from "./Jumbotron";
import Product from "./product";
import Galeri from "./Galeri";
import Comment from "./Comment";
import Rekening from "./Rekening";

AOS.init();

export default function Home() {
    return (
        <StyledHome>
            <img src="images/header.png" alt="placeholder" />
            <ReportQurban />
            <Jumbotron />
            <Product />
            <Galeri />
            <Comment />
            <Rekening />
        </StyledHome>
    );
}
