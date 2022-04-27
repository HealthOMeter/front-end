import styled from "styled-components";

export const DocumentsWrapper = styled.main`
  height: 60%;
  width: 60%;
  margin: 8.5rem 3rem;
  height: 71%;
  width: 100%;
`;

export const Categories = styled.div`
  height: 41px;
  display: flex;
  flex-direction: row;
  width: 100%;

  & button.active:not(:first-child) {
    margin-left: -1px;
  }

  & button.active + img,
  & button:nth-last-child(3) + img {
    visibility: hidden;
  }

  & img {
    height: 23px;
    align-self: center;
  }
`;

export const CategoryBtn = styled.button`
  background-color: ${(props) => (props.active ? "#fff" : "transparent")};
  cursor: pointer;
  border-style: none;
  border-top-left-radius: ${(props) => (props.active ? "7px" : "unset")};
  border-top-right-radius: ${(props) => (props.active ? "7px" : "unset")};
  border-bottom-right-radius: ${(props) => (props.active ? "unset" : "7px")};
  border-bottom-left-radius: ${(props) => (props.active ? "unset" : "7px")};
  padding: 0 1.1rem 0 1.1rem;
  color: #2b4474;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 4%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.5rem;

  & .edit-icon {
    width: 16px;
  }
`;

export const DocumentsBox = styled.div`
  background-color: #fff;
  border-radius: 7px;
  height: 88%;
  padding: 2rem;
  
  & h4 {
    font-weight: 300;
  }

  & div:nth-child(2) {
    height: 41px;
    border-radius: 7px;
    border: solid 1px #ECECEC;
    border-width: 1px;
    width: fit-content;
  }

  & div:nth-child(2) input {
    border-style: none;
  }

`;

export const FilesListHead = styled.div`
  background: rgba(239, 243, 250, 0.6);
  border: 0.5px solid #EBF0F8;
  border-radius: 7px 7px 0px 0px;
  height: 33px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const FilesListTitle = styled.p`
  color: #64748B;
  font-size: 11.2px;
  font-weight: bold;
`;

export const FilesTable = styled.div`
  max-height: 70%;
  overflow-y: hidden;
  border: 0.5px solid #EBF0F8;
  border-radius: 0px 0px 7px 7px;
`;

export const DocumentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;