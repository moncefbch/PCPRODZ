import React from "react";

export default function FilterTag(props) {
  //function remove to delete the first div of this component
  const remove = () => {
    const div = document.getElementById(props.text);
    div.parentNode.removeChild(div);
  };

  return (
    <div id={props.text} style={{ marginRight: "10px" }}>
      <span class="tag">
        <div className="font-20">{props.text}</div>{" "}
        <button class="btn-close" onClick={remove}></button>
      </span>
    </div>
  );
}
