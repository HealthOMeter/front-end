import styled from "styled-components";

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
    grid-template-columns: 70% 25px;
    align-items: center;
    column-gap: 5%;

    p:first-child {
        font-weight: 600;
    }

    p:nth-child(2) {
        color: #313131;
        font-weight: 200;
    }
`;