import styled from "styled-components";

const bgColor = '#FFFFFF';
const bgActiveColor = '#DFE5F1';

export const SettingsWrapper = styled.main`
    background-color: #ffffff;
    height: 82%;
    width: 95%;
    margin: 8.5rem 3rem 0.5rem 4rem;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 20% 70%;
    box-sizing: border-box;
    padding: 3rem;
    column-gap: 4rem;

    .personal {
        height: 100%;
        .content {
            height: 41%;
            display: grid;
            grid-template-rows: 32% 32% 46% 12%;
        }
    }

    .family {
        height: 100%;
        .content {
            height: 41%;
            display: grid;
            grid-template-rows: 26% 24% 11% 12%;
            row-gap: 3rem;
        }
    }

    .security {
        height: 100%;
        .content {
            height: 41%;
            display: grid;
            grid-template-rows: 32% 32% 46% 12%;
        }
    }

    .notif {
        height: 100%;
        .content {
            height: 41%;
            display: grid;
            grid-template-rows: 32% 32% 46% 12%;
        }
    }
`;

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
`;

export const Wrapper = styled.div`
    cursor: pointer;
    width: 100%;
    height: 8%;
    border: solid 1px transparent;
    border-radius: 7px;
    background: ${props => props.activeLink ? bgActiveColor : bgColor};
    align-self: flex-start;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: background-color 0.3s;
    font-weight: ${props => props.activeLink ? 600 : 500};
    color: ${props => props.activeLink ? '#2B4474' : '#515E72'};

    &:hover {
        background-color: rgba(223, 229, 241, 0.5);
        border-radius: 7px;
        font-weight: 600;
    }

    div {
        display: flex;
        flex-direction: row;
        column-gap: 1rem;
        align-items: center;
        padding-left: 1.5rem;
    }
`;

export const Content = styled.div`
    .header {
        .icon {
            width: 27px;
            height: 27px;
        }
        margin-bottom: 5rem;
    }

    .content {
        max-width: 100%;
        width: 700px;

        label {
            font-weight: bold;
        }

        button {
            justify-self: flex-end;
        }
    }

`;

export const NotifRowWrapper = styled.div`
    display: grid;
    grid-template-columns: 70% 3%;
    align-items: center;
    column-gap: 26%;
    border-bottom-style: solid;
    border-bottom-color: #F0F0F0;
    border-bottom-width: 0.5px;

    p:first-child {
        font-weight: 600;
    }

    p:nth-child(2) {
        color: #313131;
        font-weight: 200;
    }
`;