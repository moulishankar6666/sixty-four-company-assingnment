import { HomeContainer, SectionContainer } from "./StyledComponents";

import SavedLibrary from "../SavedLibrary";
import SliderContainer from "../Slider/index";
import RecentReleases from "../RecentReleases";
import Header from "../Header";
import AsideComponent from "../AsideComponent";
const Home = () => {
  return (
    <>
      <AsideComponent />
      <HomeContainer>
        <Header />
        <SectionContainer>
          <SavedLibrary />
          <div className="slider-recents-container">
            <SliderContainer />
            <RecentReleases />
          </div>
        </SectionContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
