import React from "react";

export default function FilterTag(props) {
  //function remove to delete the first div of this component
  const remove = () => {
    const div = document.getElementById(props.text);
    div.parentNode.removeChild(div);
  };

  return (
    <div className="filterAttribute" id={props.text}>
      {props.text}
      <button className="invisiblebutton" onClick={remove}>
        <img
          alt="img"
          className="cancelFilterAttributeSvg mrgnlft-10"
          src="images/cancelFilterAttribute.svg"
        />
      </button>
    </div>
  );
}
