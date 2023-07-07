import styled from "styled-components";

const StyledHome = styled.div`
    position: relative;
    display: block;
    section {
        position: relative;
        display: block;
        .sk {
            display: flex;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: start;
        }
        .card {
            h2 {
                position: relative;
                border-radius: 45px 5px 45px 5px;
                top: -35px;
                height: 3rem;
                width: 3rem;
            }
            span {
                position: relative;
                top: -10px;
            }
        }
    }
    @media (min-width: 768px) {
        section {
            .card {
                h2 {
                    position: relative;
                    border-radius: 45px 5px 45px 5px;
                    top: -35px;
                    height: 4rem;
                    width: 4rem;
                    font-size: 1.5rem;
                    background-image: linear-gradient(
                        to bottom,
                        #0f6e11,
                        #81ff3d
                    );
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
`;

export default StyledHome;
