import React from "react";
import SocMedia from "./SocMedia";

function Header(props) {
  return (
    <div className="container container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="page-header">
            <h2 className="blue-color">{props.title}</h2>
            <br />
          </div>
        </div>
        <div className="col-md-9 pull-right">
          <SocMedia />
        </div>
      </div>
    </div>
  );
}
export default Header;
