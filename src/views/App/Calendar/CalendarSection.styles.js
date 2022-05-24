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
    height: 100%;
    width: 100%;
    font-family: 'Poppins', serif-sans;
    display: grid;
    grid-template-rows: 10% 90%;

    .react-calendar__navigation {
        button.react-calendar__navigation__arrow{
            font-size: 30px;
            padding: 0 2rem 0 2rem;
        }
    }

    .react-calendar__navigation__label {
        transition: background-color 0.3s;
        
        &:hover {

        }
    }

    .react-calendar__navigation__label__labelText {
        font-size: 24px;
    }
    .react-calendar__viewContainer {
        .react-calendar__month-view {
            height: 100%;
            display: block;
            div {
                height: inherit;
                .react-calendar__month-view__weekdays {
                    font-size: 0.90em;
                }

                .react-calendar__month-view__days{ 
                    display: grid !important;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
                }
            }
        }
    }
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