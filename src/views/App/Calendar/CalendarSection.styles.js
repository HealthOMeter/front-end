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
        button.react-calendar__navigation__arrow {
            transition: background-color 0.3s;
            border-radius: 6px;
            font-size: 30px;
            padding: 0 2rem 0 2rem;
            color: #2B4474;

            &:enabled:hover {
                background-color: rgba(223,229,241,0.5);
            }

            &:enabled:focus {
                background-color: rgba(223,229,241,0.5);
            }
        }

        button:disabled {
            background-color: rgba(223,229,241,0.5);
        }
    }

    .react-calendar__navigation__label {
        transition: background-color 0.3s;
        border-radius: 6px;
        
        &:enabled:hover {
            background-color: rgba(223,229,241,0.5);
        }

        &:enabled:focus {
            background-color: rgba(223,229,241,0.5);
        }
    }

    .react-calendar__navigation__label__labelText {
        font-size: 20px;
        color: #2B4474;
        text-transform: uppercase;
    }
    .react-calendar__viewContainer {

        .react-calendar__decade-view {
            .react-calendar__decade-view__years {
                display: grid !important;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr 1fr;
                height: 60vh;
            }
        }

        .react-calendar__year-view {
            .react-calendar__year-view__months {
                display: grid !important;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr 1fr;
                height: 60vh;
            }

        }
        .react-calendar__month-view {
            height: 100%;
            display: block;
            & div {
                .react-calendar__month-view__weekdays {
                    font-size: 0.90em;
                }

                .react-calendar__month-view__days{ 
                    display: grid !important;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
                    height: 60vh;
                }
            }
        }

        .react-calendar__tile {
            font-size: 1.1em;
            border-radius: 6px;
            transition: all 0.3s;

            &:hover {
                background-color: rgba(223,229,241,0.5);
                font-weight: 600;
                color: #2B4474;
            }

            &:enabled:focus {
                background-color: rgba(250, 73, 126, 0.7);
                color: #ffffff;
            }
        }

        .react-calendar__tile--now {
            border: 2px solid rgba(250, 73, 126, 0.7);
            box-shadow: 0px 0px 70px rgba(66, 66, 66, 0.1);
            border-radius: 7px;
            background-color: transparent;
            
            abbr {
                color: rgba(250, 73, 126, 0.7);
                font-weight: 700;
            }

            &:hover {

            }
        }

        .react-calendar__month-view__days__day--neighboringMonth {
            font-weight: 200;
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