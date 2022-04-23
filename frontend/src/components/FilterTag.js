import React from "react";

export default function FilterTag(props) {
  const { text } = props;
  return (
    <div className="filterAttribute">
      {text}
      <button className="invisiblebutton">
        <img
          alt="img"
          className="mrgnlft-10 cancelFilterAttributeSvg"
          src="images/cancelFilterAttribute.svg"
        />
      </button>
    </div>
  );
}
