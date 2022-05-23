import styled from "styled-components";
import Calendar from "react-calendar";

export const CalendarWrapper = styled.main`
    height: 60%;
    width: 60%;
    margin: 8.5rem 3rem;
    height: 71%;
    width: 100%;
`;

export const CalendarBox = styled(Calendar)`
    border-style: none;
    border-radius: 8px;
    height: 71%;
    width: 100%;
`;

export const Toolbar = styled.div`
    display: grid;
    grid-template-columns: 13% 13% 19% 51.5%;
    column-gap: 1rem;
    height: 41px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;

    & > div {
        background-color: #ffffff;
        border-color: #ffffff;
    }

    & button {
        justify-self: end;
    }
`;