import styled from "styled-components";

const StyledHome = styled.div`
    position: relative;
    display: block;
    section {
        position: relative;
        display: block;
        .hr_bor {
            border-top: 20px dotted white;
        }
        .peta-sebaran {
            overflow: hidden;
            height: 200px;
            width: 80%;
            margin: auto;
            border-radius: 20px;
        }
        .sk {
            display: flex;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            width: 80%;
        }
        .card {
            align-items: center;
            h2 {
                position: relative;
                border-radius: 45px 5px 45px 5px;
                top: -35px;
                height: 3rem;
                width: 3rem;
                background-image: linear-gradient(to bottom, #0f6e11, #81ff3d);
            }
            span {
                position: relative;
                top: -10px;
            }
        }
    }
    @media (min-width: 768px) {
        section {
            .peta-sebaran {
                padding: 1rem;
                height: 360px;
                width: 90%;
            }
            .sk {
                display: flex;
                flex-shrink: 0;
                flex-direction: column;
                justify-content: start;
                height: auto;
                width: 33.33333%;
            }
            .card {
                h2 {
                    position: relative;
                    border-radius: 45px 5px 45px 5px;
                    top: -35px;
                    height: 4rem;
                    width: 4rem;
                    font-size: 1.5rem;
                }
                span {
                    position: relative;
                    top: -10px;
                }
            }
        }
    }
    @media (min-width: 992px) {
        section {
            .peta-sebaran {
                height: 400px;
                width: 75%;
                padding: 0rem;
            }
            .card {
                h2 {
                    position: relative;
                    border-radius: 50px 5px 50px 3px;
                    top: -35px;
                    height: 4.5rem;
                    width: 4.5rem;
                    font-size: 1.8rem;
                }
                span {
                    position: relative;
                    top: -10px;
                    p {
                        font-size: 1.2rem;
                    }
                    strong {
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
    .leaflet-container {
        height: 100vh;
        width: 100%;
    }
`;

export default StyledHome;
