import styled from "styled-components";

export const PageWrapper = styled.main`
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 2%;
    @media (min-width: 1400px) and (max-width: 1699px) {
        padding: 0 5%;
    }
    @media (min-width: 1700px) {
        padding: 0 12%;
    }

    .header-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50%;

        button {
            padding: 6px 16px;
            width: 101px;
        }
    }
`;
