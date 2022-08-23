import styled from "styled-components";

export const IconBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
    border: 1px solid #ECECEC;
    border-radius: 7px;
    background-color: transparent;
    color: ${props => props.typeName === "primary" ? "#FF8080" : "#515E72"};
    width: max-content;
    padding: 0 1rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        border-color: rgba(250, 73, 126, 0.7);
    }
`;