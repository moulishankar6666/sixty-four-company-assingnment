import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 59px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0px 10px 0px;
  h1 {
    padding: 5px 10px;
    margin-bottom: 60px;
    background-color: #04042e;
    color: #fff;
    border-radius: 5px;
  }
  nav {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  nav > button {
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 20px;
  }
  button {
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 20px;
  }
`;
