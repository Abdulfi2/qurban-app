import AOS from "aos";
import "aos/dist/aos.css";
import StyledHome from "./Home.styled";
import "leaflet/dist/leaflet.css";
import ReportQurban from "./ReportQurban";
import Jumbotron from "./Jumbotron";
import Galeri from "./Galeri";
import Comment from "./Comment";
import Rekening from "./Rekening";
import ProductList from "./ProductList";

AOS.init();

export default function Home(props) {
    return (
        <StyledHome>
            <img src="images/header.png" alt="placeholder" />
            <ReportQurban />
            <Jumbotron />
            <ProductList product={props.product} />
            <Galeri />
            <Comment />
            <Rekening />
        </StyledHome>
    );
}
