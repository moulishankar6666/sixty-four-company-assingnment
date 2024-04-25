import styled from "styled-components";

export const HomeContainer = styled.div`
  width: calc(100vw - 60px);
  height: 100vh;
  overflow: scroll;
  position: relative;
  display: flex;
`;

export const SectionContainer = styled.section`
  position: absolute;
  top: 70px;

  .slider-recents-container {
    display: flex;
    gap: 5px;
  }

  @media screen and (max-width: 767px) {
    .slider-recents-container {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;
