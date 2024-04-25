import { FaCalendarAlt, FaMoon } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

import { useEffect, useState } from "react";

import { HeaderContainer } from "./StyledComponents";

const Header = () => {
  const FullDate = new Date();
  const [date, setDate] = useState(FullDate);

  useEffect(() => {
    setInterval(setDate(new Date()), 1000);
  }, []);
  return (
    <HeaderContainer className="header-container">
      <div className="welcome-msg">
        <h3>Good Afternoon, Mouli</h3>
        <p>You are subscribed to Retail plan.</p>
      </div>
      <div className="date-and-time-container">
        <div>
          <FaCalendarAlt className="icons" />
          <p>{`${date.getDate()} - ${
            date.getMonth() + 1
          } - ${date.getFullYear()}, Today`}</p>
          <FaClock className="icons" />
          <p>{`${date.getHours()} : ${date.getMinutes()}`}</p>
        </div>
        <IoNotifications size={16} className="icons" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
