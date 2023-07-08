import AOS from "aos";
import "aos/dist/aos.css";
import StyledHome from "./Home.styled";
import "leaflet/dist/leaflet.css";
import ReportQurban from "./ReportQurban";
import Jumbotron from "./Jumbotron";

AOS.init();

export default function Home() {
    return (
        <StyledHome>
            <img src="images/header.png" alt="placeholder" />
            <ReportQurban />
            <Jumbotron />
        </StyledHome>
    );
}
