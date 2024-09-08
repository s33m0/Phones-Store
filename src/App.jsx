import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { UpdateFollower } from "react-mouse-follower";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <Home />
      </UpdateFollower>
    </main>
  );
};

export default App;
