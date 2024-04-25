import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: calc(100vw - 60px);
  padding: 10px;
  height: 120px;
  background-color: #04042e;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 15px;

  .welcome-msg > h3 {
    color: #fff;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .welcome-msg > p {
    color: grey;
    font-size: 10px;
  }

  .date-and-time-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .date-and-time-container > div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .date-and-time-container > div > p {
    color: #fff;
    font-size: 10px;
  }

  .date-and-time-container .icons {
    color: #fff;
    font-size: 12px;
    margin-left: 10px;
  }
`;
