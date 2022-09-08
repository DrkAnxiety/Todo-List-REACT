import React from "react";
import { GiNotebook as Note } from "react-icons/gi";
import "./Logo.css";

export const Logo = ({ partOne, partTwo, partThree }) => {

    // style={{ "--my-css-var": 10 } as React.CSSProperties}
    return (
    <div className="logo-container">
      <h1 className="logo-title-container">
        <span className="logo-letters" style={{'--content': `${partOne}`}}>{partOne}</span>
        <span className="logo-letters" style={{'--content': `${partTwo}`}}>{partTwo}</span>
        <span className="logo-letters" style={{'--content': `${partThree}`}}>
          {partThree}
          <Note className="logo" />
        </span>
      </h1>
    </div>
  );
};
