import styled from "styled-components";

export const SliderListContainer = styled.div`
  display: flex;
  width: calc(100vw - 60px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 16px grey;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 60vw;
    margin: 10px;
  }

  .slider {
    width: 95%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .slider-card {
    background-color: #fff;
    height: 250px;
    border-radius: 10px;
    font-size: 12px;
  }
  .slider-card > div {
    border-radius: 10px;
    box-shadow: 1px 1px 10px grey;
    height: 100%;
    padding: 5px;
    margin: 5px 5px;
    overflow: scroll;
  }

  .slider-card > div > img {
    width: 100%;
    height: 200px;
    object-fit: fit;
    border-radius: 10px;
  }

  .slider-card > div > h3 {
    margin: 5px 0px;
  }

  .slider-button {
    margin-top: 20px;
    background-color: #04042e;
    color: #fff;
    padding: 5px 10px;
    outline: none;
    border: none;
    border-radius: 7px;
    cursor: pointer;
  }
`;
