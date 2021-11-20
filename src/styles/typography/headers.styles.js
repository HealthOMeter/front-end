import styled from 'styled-components';

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.015em;
    font-size: 64px;
    color: #252E2A;
    @media (min-width: 1440px) {
        font-weight: 600;
        font-size: 72px;
    }
`;

export const H1 = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.015em;
    font-size: 64px;
    font-family: 'Poppins', sans-serif
    color: #252E2A;
    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 34.18px;
    }
`;

export const Subheader = styled.h2`
    font-size: 21.88px;
    line-height: 140%;
    color: #252E2A;
    font-weight: 500;
`;

/* i.e. used for login title */
export const Title = styled.h2`
    margin: 0;
    padding: 0;
    color: #000;
    font-weight: 600;
    font-size: 30px;
`;