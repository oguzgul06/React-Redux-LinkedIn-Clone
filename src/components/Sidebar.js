import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://w0.peakpx.com/wallpaper/39/304/HD-wallpaper-linkedin-turquoise-logo-turquoise-brickwall-linkedin-logo-social-networks-linkedin-neon-logo-linkedin.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Oğuz GÜL</h2>
        <h4>ogzgl06@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
