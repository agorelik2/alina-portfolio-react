import React from "react";

function Header(props) {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="page-header">
          <h2 className="blue-color">{props.title}</h2>
          <br />
        </div>
      </div>
    </div>
  );
}
export default Header;
