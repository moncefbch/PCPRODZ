import React from "react";

export default function Steps(props) {
  const step = props.step;
  return (
    <div>
      <div className="steps-wrap">
        <li className="step active">
          <span className="icon">1</span>
          <span className="text">S'identifier</span>
        </li>
        {/*step === shipping or confirmed */}

        {step === "shipping" || step === "confirmed" ? (
          <li className="step active">
            <span className="icon">2</span>
            <span className="text">Les Information de Laivraison</span>
          </li>
        ) : (
          <li className="step ">
            <span className="icon">2</span>
            <span className="text">Les Information de Laivraison</span>
          </li>
        )}
        {step === "confirmed" ? (
          <li className="step active">
            <span className="icon">3</span>
            <span className="text">Confirmation</span>
          </li>
        ) : (
          <li className="step ">
            <span className="icon">3</span>
            <span className="text">Confirmation</span>
          </li>
        )}
      </div>
    </div>
  );
}
