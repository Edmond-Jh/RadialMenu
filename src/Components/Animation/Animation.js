import React from "react";
import PieMenu, { Slice } from "react-pie-menu";
import { Link } from "react-router-dom";
import AnimationIcon from "@mui/icons-material/Animation";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
function Animation() {
  const animation = [
    {
      animationName: "Anim1",
      icon: "icon-num-1",
      onClick: () => console.log("Im Here"),
    },
    {
      animationName: "Anim2",
      icon: "icon-num-2",
      onClick: () => console.log("Im Here"),
    },
    {
      animationName: "Anim3",
      icon: "icon-num-3",
      onClick: () => console.log("Im Here"),
    },
    {
      animationName: "Anim4",
      icon: "icon-num-4",
      onClick: () => console.log("Im Here"),
    },
    {
      animationName: "Anim5",
      icon: "icon-num-5",
      onClick: () => console.log("Im Here"),
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
        {animation.map((animation, index) => (
          <Link to="" onClick={animation.onClick} key={index}>
            <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
              <AnimationIcon />
              <div className="items">{animation.animationName}</div>
            </Slice>
          </Link>
        ))}
      </PieMenu>
    </>
  );
}

export default Animation;
