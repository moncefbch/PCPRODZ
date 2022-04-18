import React from "react";

export default function ErrorMessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || "info"}`}>
      <i className="fa fa-exclamation-triangle fa-3x fa-fw"></i>{" "}
      {props.children}
    </div>
  );
}
