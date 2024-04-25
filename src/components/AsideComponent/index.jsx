import { AsideContainer } from "./styleComponents";

import { FaSearch } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHeadset } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaTableCells } from "react-icons/fa6";

const AsideComponent = () => {
  return (
    <AsideContainer>
      <div>
        <h1>D</h1>
        <nav>
          <button>
            <FaSearch />
          </button>
          <button>
            <FiMonitor />
          </button>
          <button>
            <FaRegQuestionCircle />
          </button>
          <button>
            <CiCalendarDate />
          </button>
          <button>
            <FaTableCells />
          </button>
          <button>
            <AiFillDollarCircle />
          </button>
          <button>
            <FaHeadset />
          </button>
        </nav>
      </div>
      <button>
        <IoSettings />
      </button>
    </AsideContainer>
  );
};

export default AsideComponent;
