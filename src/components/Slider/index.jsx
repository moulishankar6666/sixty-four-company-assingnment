import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderListContainer } from "./StyledComponents";

import stateOfMarketsImg from "../Images/markerts.jpeg";
import cepexImg from "../Images/cepex.png";
import directTaxImg from "../Images/directtax.jpeg";
import BankingImg from "../Images/banking.jpeg";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        gap: "0px",
      }}
      onClick={onClick}
    />
  );
}

const SliderContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderListContainer>
      <Slider className="slider" {...settings}>
        <div className="slider-card">
          <div>
            <img src={stateOfMarketsImg} alt="slide-img" />
            <h3>State of Markets</h3>
            <p>
              The market capitalisation of indian stocks crossed US$4.5 trillion
              in january.
            </p>
          </div>
        </div>
        <div className="slider-card">
          <div>
            <img src={cepexImg} alt="slide-img" />
            <h3>The Central Capex Surge</h3>
            <p>
              The last few years have seen a very substantial step up in capital
              ...
            </p>
          </div>
        </div>
        <div className="slider-card">
          <div>
            <img src={directTaxImg} alt="slide-img" />
            <h3>Direct Taxes and Business Cycle</h3>
            <p>
              The share of direct taxes in total tax collections of the Central
              government is ...
            </p>
          </div>
        </div>
        <div className="slider-card">
          <div>
            <img src={BankingImg} alt="slide-img" />
            <h3>Banking Moniter</h3>
            <p>
              Credit growth has remained broadly stable in recent weeks at
              just...
            </p>
          </div>
        </div>
      </Slider>
      <button className="slider-button">View More</button>
    </SliderListContainer>
  );
};

export default SliderContainer;
