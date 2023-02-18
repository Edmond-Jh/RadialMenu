import React from "react";
import PieMenu, { Slice } from "react-pie-menu";
import { Routes, Route } from "react-router-dom";

// componenets
import Radialhome from "./Components/RadialHome/Radialhome";
import Animation from "./Components/Animation/Animation";
import Work from "./Components/Work/Work";
import Phone from "./Components/Phone/Phone";
import Vehicle from "./Components/Vehicle/Vehicle";
import Citizen from "./Components/Citizen/Citizen";
import House from "./Components/House/House";
// css
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Radialhome />} />

      <Route path="/Work" element={<Work />} />

      <Route path="/Animation" exact element={<Animation />} />

      <Route path="/Phone" element={<Phone />} />

      <Route path="/Vehicle" element={<Vehicle />} />

      <Route path="/Citizen" element={<Citizen />} />

      <Route path="/House" element={<House />} />

      <Route path="*" exact element={<Radialhome />} />
    </Routes>
  );
}

export default App;
