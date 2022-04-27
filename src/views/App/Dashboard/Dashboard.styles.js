import styled from 'styled-components';
import { H4 } from '../../../styles/typography/headers.styles';

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
    padding: 2rem;
    position: relative;

    & button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }
`;

export const DashboardBoxTitle = styled(H4)`
    display: flex;
    column-gap: 0.7rem;
`;

export const FreeSpaceBarWrapper = styled.div`
    background-color: #E9E9E9;
    width: 100%;
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

export const DocumentsTableHead = styled.div`
    display: grid;
    grid-template-columns: 30% 33% 46%;
    border-bottom: solid 1px #B2B2B2;
    padding-bottom: 0.3rem;
    text-align: center;

    & p {
        font-size: 12px;
        color: #515E72;
        font-weight: 550;
    }
`;

export const DocumentRow = styled.div`
    display: grid;
    grid-template-columns: 2% 23% 42% 41%;
    align-items: center;
    background-color: ${props => props.darkBgr ? '#FBFBFB' : '#fff'};
    height: 50px;
    padding: 0.2rem .5rem;
    border-radius: 7px;
    text-align: center;
    
    & > p {
        font-size: 14px;      
        font-weight: 400;
    }

    & .doc-name {
        color: #000000;
    }

    & .doc-category,
    & .doc-date {
        color: #515E72;
    }
`;

export const NoContentTxtWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-top: -2rem;
    row-gap: .8rem;
    
    & img {
        width: 50px;
    }

    & a {
        font-size: 14px;
        font-weight: 600;
        color: #64748B;
    }

    & .free-space-txt {
        align-self: start;
        color: #515E72;
        font-size: 14px;
        font-weight: 500;
    }
`;