import styled from "styled-components";

export const SavedLibraryContainer = styled.ul`
  list-style-type: none;
  width: calc(100vw - 60px);
  padding: 10px;
  color: #000;
  display: flex;
  align-items: center;
  gap: 15px;
  overflow: scroll;

  li {
    border: solid #fff;
    min-width: 150px;
    padding: 20px 5px;
    font-size: 13px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px grey;
    background-color: #fff;
  }
`;
