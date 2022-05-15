import React from "react";

export default function Thanks() {
  return (
    <div className="informationspanel thankscard">
      <svg
        style={{ width: "50px", height: "50px" }}
        width="135"
        height="135"
        viewBox="0 0 135 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M53.8636 84.0896L35.9659 66.2239L30 72.1791L53.8636 96L105 44.9552L99.0341 39L53.8636 84.0896Z"
          fill="#4E9427"
        />
        <circle
          cx="67.5"
          cy="67.5"
          r="62.5"
          stroke="#4E9427"
          stroke-width="10"
        />
      </svg>
      <header class="font-cabin font-40 pdgtp-5 font-bold">
        Nous vous remercions !
      </header>
      <header class="font-cabin font-30 pdgtp-5 ">
        Votre commande a été complétée avec succès
      </header>
      <li className="font-25 mrgntp-70">
        <i class="icon fa-solid fa-phone"></i> Vous recevrez un appel pour
        confirmer votre commande
      </li>
      <header class="font-cabin font-15 mrgntp-70 ">
        Vous pouvez voir votre commande dans votre historique des commandes
      </header>
      <header class="font-cabin text-muted font-10  ">PcProDz</header>
    </div>
  );
}
