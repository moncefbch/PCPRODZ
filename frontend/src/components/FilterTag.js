import React from "react";

export default function FilterTag(props) {
  const { text } = props;
  return (
    <div className="filterAttribute">
      {text}
      <button className="invisiblebutton">
        <img
          alt="img"
          className="cancelFilterAttributeSvg mrgnlft-10"
          src="images/cancelFilterAttribute.svg"
        />
      </button>
    </div>
  );
}
