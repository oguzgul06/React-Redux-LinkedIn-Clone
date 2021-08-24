import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle(
        "React-Redux is the best tool on the tech",
        "Top News - 9098 readers"
      )}

      {newArticle("Coronavirus: UK updates", "Top News - 896 readers")}

      {newArticle(
        "Bitcoin is $22k",
        "Crypto - 785 readers"
      )}
    </div>
  );
}

export default Widgets;
