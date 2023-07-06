import styled from "styled-components";

const StyledNavbar = styled.div`
    position: relative;
    display: block;
    nav {
        position: relative;
        display: block;
        box-sizing: border-box;
        padding: 1rem;
    }

    a {
        text-decoration: none;
        img {
            width: 40px;
        }
        span {
            font-weight: 700;
        }
    }
    @media (min-width: 768px) {
        a {
            img {
                width: 50px;
            }
            span {
                display: none;
            }
        }
    }
    @media (min-width: 992px) {
        a {
            img {
                width: 60px;
            }
            span {
                display: block;
            }
        }
    }
`;

export default StyledNavbar;
