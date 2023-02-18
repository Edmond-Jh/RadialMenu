import React from "react";
import { Link } from "react-router-dom";
import PieMenu, { Slice } from "react-pie-menu";

// icons
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

function Citizen() {
  const citizen = [
    {
      ActionName: "Citizen",
      icon: "icon-num-2",
      onClick: () => console.log("Im doing somthing"),
    },
    {
      ActionName: "Citizen",
      icon: "icon-num-1",
      onClick: () => console.log("Im A Citizen"),
    },
    {
      ActionName: "Citizen",
      icon: "icon-num-3",
      onClick: () => console.log("Im Citizen"),
    },
    {
      ActionName: "Citizen",
      icon: "icon-num-4",
      onClick: () => console.log("Im Citizen"),
    },
    {
      ActionName: "Citizen",
      icon: "icon-num-5",
      onClick: () => console.log("Im Citizen"),
    },
  ];
  const centerSlice = {
    ActionName: "Return",
    icon: "icon-num-6",
    onClick: () => console.log("Im returning to menu"),
  };
  return (
    <>
      <PieMenu
        radius="155px"
        centerRadius="40px"
        className="animate__animated animate__zoomIn"
      >
        <Link to="/" onClick={centerSlice.onClick} key={centerSlice.icon}>
          <Slice
            className="slice"
            backgroundColor="rgba(0, 0, 0, 0.514)"
            color="white"
          >
            <KeyboardReturnIcon />
            <div className="items">{centerSlice.ActionName}</div>
          </Slice>
        </Link>
        {citizen.map((citizen, index) => (
          <Link to="" onClick={citizen.onClick} key={index}>
            <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
              <AccessibilityNewIcon />
              <div className="items">{citizen.ActionName}</div>
            </Slice>
          </Link>
        ))}
      </PieMenu>
    </>
  );
}

export default Citizen;
