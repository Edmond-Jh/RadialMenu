import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PieMenu, { Slice } from "react-pie-menu";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
function Work() {
  const [workAction, setWorkAction] = useState();
  useEffect(() => {
    mp.events.add("work", (workdata) => {
      setWorkAction(workdata);
    });
  }, []);
  const WorkAction = [
    {
      ActionName: "Work",
      icon: "icon-num-2",
      onClick: () => console.log("Im doing somthing"),
    },
    {
      ActionName: "Work",
      icon: "icon-num-1",
      onClick: () => console.log("Im A work"),
    },
    {
      ActionName: "Work",
      icon: "icon-num-3",
      onClick: () => console.log("Im Work"),
    },
    {
      ActionName: "Work",
      icon: "icon-num-4",
      onClick: () => console.log("Im Work"),
    },
    {
      ActionName: "Work",
      icon: "icon-num-5",
      onClick: () => console.log("Im Work"),
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
        {WorkAction.map((WorkAction, index) => (
          <Link to="" onClick={WorkAction.onClick} key={index}>
            <Slice className="slice" backgroundColor="rgba(0, 0, 0, 0.514)">
              <BusinessCenterIcon />
              <div className="items">{WorkAction.ActionName}</div>
            </Slice>
          </Link>
        ))}
      </PieMenu>
    </>
  );
}

export default Work;
