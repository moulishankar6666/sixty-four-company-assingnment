import { RecentReleasesContainer } from "./StyledComponents";

import { GoDotFill } from "react-icons/go";

const RecentReleases = () => {
  return (
    <RecentReleasesContainer>
      <div className="Recent-releases-header">
        <p>Recent Releases</p>
        <select>
          <option>India</option>
        </select>
      </div>
      <hr />
      <div className="Recent-releases-content">
        <div className="content-title">
          <GoDotFill color="grey" /> <p>February 12,2024</p>
        </div>
        <div className="content-sub-title">
          <hr />
          <div>
            <h4>Industrial Production</h4>
            <p>
              index of industrial production (IIP) grow by 3.8% YoY in December,
              as compared to a 5.1% YOY growth in the same month last
              year.Electricity has seen the slowest growth of 1.2% YoY in
              December as compared to 10.4% YoY growth in the same month last
              year.
            </p>
          </div>
        </div>
      </div>
      <div className="Recent-releases-content">
        <div className="content-title">
          <GoDotFill color="grey" /> <p>February 12,2024</p>
        </div>
        <div className="content-sub-title">
          <hr />
          <div>
            <h4>CPI Inflation</h4>
            <p>
              "While prices continued to rise for most goods and services,
              annual CPI inflation was down from 4.1 per cent last quarter and
              has fallen from the peak of 7.8 per cent in December 2022," she
              said. Although inflation is moderating, Wednesday's data has
              reduced the likelihood of the Reserve Bank of Australia cutting
              interest rates later this year.
            </p>
          </div>
        </div>
      </div>
    </RecentReleasesContainer>
  );
};

export default RecentReleases;
