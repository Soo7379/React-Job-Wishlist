import React, { useContext } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { GlobalContext } from "../../context/GlobalState";

import "./Header.css";

const Header = () => {
  const { jobLists } = useContext(GlobalContext);
  return (
    <div className="header">
      <div className="header__title">
        <StarBorderIcon />

        <h1>WISHLIST</h1>
      </div>

      <div className="header__jobs">
        <h4>{jobLists.length} JOBS</h4>
      </div>
    </div>
  );
};

export default Header;
