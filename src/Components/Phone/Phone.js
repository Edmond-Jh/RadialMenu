import React from "react";
import { Link } from "react-router-dom";
import PieMenu, { Slice } from "react-pie-menu";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
function Phone() {
  const PhoneAction = [
    {
      ActionName: "Phone",
      icon: "icon-num-2",
      onClick: () => console.log("Im phone"),
    },
    {
      ActionName: "Give Number",
      icon: "icon-num-1",
      onClick: () => console.log("Im A Number"),
    },
    {
      ActionName: "PhAction",
      icon: "icon-num-3",
      onClick: () => console.log("Im PhAction"),
    },
    {
      ActionName: "PhAction",
      icon: "icon-num-4",
      onClick: () => console.log("Im PhAction"),
    },
    {
      ActionName: "PhAction",
      icon: "icon-num-5",
      onClick: () => console.log("Im PhAction"),
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
        {PhoneAction.map((PhoneAction, index) => (
          <Link to="" onClick={PhoneAction.onClick} key={index}>
            <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
              <PhoneIphoneIcon />
              <div className="items">{PhoneAction.ActionName}</div>
            </Slice>
          </Link>
        ))}
      </PieMenu>
    </>
  );
}

export default Phone;
