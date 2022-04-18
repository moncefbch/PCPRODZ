import React from "react";

export default function SecondaryNavigationBar() {
  return (
    <div className="secondNavBar" style={{ backgroundColor: "#3c3c3c" }}>
      <div className="dropdown pdngrgt-20">
        <button className="dropbtn">
          <img src="/images/dropdownIcon.svg" alt="dropdownicon" />
        </button>
        <div className="dropdown-content">
          <header className="font-cabin font-30 mrgnlft-5 cathegoriesHeader">
            Cathegories
          </header>
          <a className="font-cabin font-20 mrgnlft-5 onecathegorie" href="/">
            Ordinateurs{" "}
          </a>
          <a className="font-cabin font-20 mrgnlft-5 onecathegorie" href="/">
            Hardware{" "}
          </a>
          <a className="font-cabin font-20 mrgnlft-5 onecathegorie" href="/">
            Accesoires{" "}
          </a>
          <a className="font-cabin font-20 mrgnlft-5 onecathegorie" href="/">
            Cameras{" "}
          </a>
          <a className="font-cabin font-20 mrgnlft-5 onecathegorie" href="/">
            Divers{" "}
          </a>
        </div>
      </div>

      <a
        className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="/"
      >
        Meilleurs ventes{" "}
      </a>
      <a
        className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="/"
      >
        Offres{" "}
      </a>
      <a
        className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="/"
      >
        Produits{" "}
      </a>
      <a
        className="hideWhenPhone notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="/"
      >
        Service client{" "}
      </a>
      <a
        className="hideWhenPhone notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="/"
      >
        Nous contacter{" "}
      </a>
    </div>
  );
}
