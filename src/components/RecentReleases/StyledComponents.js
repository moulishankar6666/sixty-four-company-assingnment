import styled from "styled-components";

export const RecentReleasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 1px 1px 10px grey;
  gap: 5px;
  overflow: scroll;

  @media screen and (max-width: 767px) {
    max-width: calc(100vw-60px);
  }

  .Recent-releases-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    height: 30px;
    width: 100%;
  }

  .Recent-releases-header > p {
    color: blue;
    font-weight: 700;
    font-size: 18px;
  }

  .Recent-releases-header > select {
    outline: none;
    padding: 2px;
    border: solid 2px #000;
    border-radius: 5px;
  }

  .Recent-releases-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .Recent-releases-content > .content-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .content-title > p {
    font-weight: bold;
    color: #6363eb;
  }

  .Recent-releases-content > .content-sub-title {
    display: flex;
    gap: 15px;
    margin-left: 6px;
  }
  .content-sub-title > hr {
    width: 10px;
    background-color: grey;
    border-radius: 10px;
    height: 100%;
  }
  .content-sub-title > div > p {
    font-size: 12px;
  }
`;
