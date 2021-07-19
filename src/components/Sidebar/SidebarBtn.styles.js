import styled from "styled-components";

const bgActiveColor = '#DFE5F1';
const bgColor = '#FFFFFF';
const txtColor = '#A8B4C6';
const txtActiveColor = '#2B4474';

export const SidebarItem = styled.div`
    width: 95%;
    height: 8%;
    border: solid 1px transparent;
    border-radius: 7px;
    background-color: ${(props) => (props.active ? bgActiveColor : bgColor)};
    align-self: flex-start;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    a {
        font-weight: ${(props) => (props.active ? '600' : '500')};
        text-decoration: none;
        color: ${(props) => (props.active ? txtActiveColor : txtColor)};
        margin: auto;
    }
`;
