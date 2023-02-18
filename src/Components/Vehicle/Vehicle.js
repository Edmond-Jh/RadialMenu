import React from "react";
import { Link } from "react-router-dom";
import PieMenu, { Slice } from "react-pie-menu";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
function Vehicle() {
  const vehicleAction = [
    {
      ActionName: "Parking",
      icon: "icon-num-1",
      onClick: () => console.log("Im Car"),
    },
    {
      ActionName: "Show",
      icon: "icon-num-2",
      onClick: () => console.log("Im Car"),
    },
    {
      ActionName: "vehicle",
      icon: "icon-num-3",
      onClick: () => console.log("Im Car"),
    },
    {
      ActionName: "vehicle",
      icon: "icon-num-4",
      onClick: () => console.log("Im Car"),
    },
    {
      ActionName: "vehicle",
      icon: "icon-num-5",
      onClick: () => console.log("Im Car"),
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
        {vehicleAction.map((vehicleAction, index) => (
          <Link to="" onClick={vehicleAction.onClick} key={index}>
            <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
              <DirectionsCarIcon />
              <div className="items">{vehicleAction.ActionName}</div>
            </Slice>
          </Link>
        ))}
      </PieMenu>
    </>
  );
}

export default Vehicle;
