import React from "react";
import { Link } from "react-router-dom";
import PieMenu, { Slice } from "react-pie-menu";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AnimationIcon from "@mui/icons-material/Animation";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

function Radialhome() {
  return (
    <PieMenu
      radius="155px"
      centerRadius="40px"
      className="animate__animated animate__fadeIn"
    >
      <Link to="/work">
        <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
          <BusinessCenterIcon />
          <div className="items">Work</div>
        </Slice>
      </Link>
      <Link to="/Animation">
        <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
          <AnimationIcon />
          <div className="items">Animation</div>
        </Slice>
      </Link>
      <Link to="/Vehicle">
        <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
          <DirectionsCarIcon />
          <div className="items">Vehicel</div>
        </Slice>
      </Link>
      <Link to="/House">
        <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
          <HomeIcon />
          <div className="items">House</div>
        </Slice>
      </Link>
      <Link to="/Citizen">
        <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
          <AccessibilityNewIcon />
          <div className="items">Citizen</div>
        </Slice>
      </Link>
      <Link to="/Phone">
        <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
          <PhoneIphoneIcon />
          <div className="items">Phone</div>
        </Slice>
      </Link>
    </PieMenu>
  );
}

export default Radialhome;
