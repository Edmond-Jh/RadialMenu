import React from "react";
import { Link } from "react-router-dom";
import PieMenu, { Slice } from "react-pie-menu";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

// Animated Css
import "animate.css/animate.min.css";
import { Animated } from "react-animated-css";

function House() {
  const house = [
    {
      ActionName: "House",
      icon: "icon-num-2",
      onClick: () => console.log("Im doing somthing"),
    },
    {
      ActionName: "House",
      icon: "icon-num-1",
      onClick: () => console.log("Im A House"),
    },
    {
      ActionName: "House",
      icon: "icon-num-3",
      onClick: () => console.log("Im House"),
    },
    {
      ActionName: "House",
      icon: "icon-num-4",
      onClick: () => console.log("Im House"),
    },
    {
      ActionName: "House",
      icon: "icon-num-5",
      onClick: () => console.log("Im House"),
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
        {house.map((house, index) => (
          <Link to="" onClick={house.onClick} key={index}>
            <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
              <HomeIcon />
              <div className="items">{house.ActionName}</div>
            </Slice>
          </Link>
        ))}
      </PieMenu>
    </>
  );
}

export default House;
