import styled from 'styled-components';

export const TopBar = styled.nav`
    display: grid;
    position: absolute;
    top: 0;
    width: 100%;
    justify-content: flex-end;
    grid-template-columns: 42% 19% 0% 6%;
    grid-template-rows: 4rem;
    grid-gap: 4rem;
    align-items: center;
    padding-top: 1.4rem;
`;
