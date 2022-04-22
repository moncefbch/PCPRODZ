import React from "react";

export default function cartItem(props) {
  //
  const item = props;
  console.log(item);
  return (
    <div className="mrgntp-30 pdgtp-15">
      <div className="flex-container pdng-100 ">
        <div className="flex-item-left-30">
          <img
            src={item.image}
            alt={item.name}
            width={"200px"}
            height={"250px"}
          ></img>
        </div>
        <div className="flex-item-right-70">
          <div className="font-cabin width-full font-30">
            <header>{item.name}</header>
          </div>
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            White
          </small>
          <header className="font-25 font-cabin pdgtp-15">{item.price}</header>
          <div className="font-20 font-cabin pdgtp-35">
            prix :{item.price} x {item.qty}
          </div>
        </div>
      </div>
      <hr class="width-full productMargin" />
    </div>
  );
}
