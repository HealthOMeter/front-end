import styled from 'styled-components';

export const DashboardStructure = styled.main`
    display: grid;
    grid-template-columns: 62% 1fr;
    grid-template-rows: 1fr 1fr;
    height: 74%;
    row-gap: 2rem;
    column-gap: 2rem;
    margin: 8.5rem 3rem;
    width: 100%;
`;

export const DashboardBox = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 70px #E5E5E5;
    border-radius: 7px;
`;

export const FreeSpaceBarWrapper = styled.div`
    background-color: #E9E9E9;
    width: 70%;
    border-radius: 8px;
    height: 7px;
    z-index: 2;
    position: relative;
`;

export const FreeSpaceBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.takenSpacePercent}%;
    height: inherit;
    border-radius: inherit;
    background-color: #3864BC;
    z-index: 3;
`;