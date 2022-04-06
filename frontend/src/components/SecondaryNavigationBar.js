import React from "react";

export default function SecondaryNavigationBar() {
  return (
    <div className="secondNavBar" style={{ backgroundColor: "#3c3c3c" }}>
      <div className="dropdown pdngrgt-20">
        <button className="dropbtn">
          <img src="images/dropdownIcon.svg" alt="dropdownicon" />
        </button>
        <div className="dropdown-content">
          <header className="font-cabin font-30 mrgnlft-5 cathegoriesHeader">
            Cathegories
          </header>
          <a
            className="font-cabin font-20 mrgnlft-5 onecathegorie"
            href="emptyPage.html"
          >
            Ordinateurs{" "}
          </a>
          <a
            className="font-cabin font-20 mrgnlft-5 onecathegorie"
            href="emptyPage.html"
          >
            Hardware{" "}
          </a>
          <a
            className="font-cabin font-20 mrgnlft-5 onecathegorie"
            href="emptyPage.html"
          >
            Accesoires{" "}
          </a>
          <a
            className="font-cabin font-20 mrgnlft-5 onecathegorie"
            href="emptyPage.html"
          >
            Cameras{" "}
          </a>
          <a
            className="font-cabin font-20 mrgnlft-5 onecathegorie"
            href="emptyPage.html"
          >
            Divers{" "}
          </a>
        </div>
      </div>

      <a
        className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="emptyPage.html"
      >
        Meilleurs ventes{" "}
      </a>
      <a
        className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="emptyPage.html"
      >
        Offres{" "}
      </a>
      <a
        className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="emptyPage.html"
      >
        Produits{" "}
      </a>
      <a
        className="hideWhenPhone notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="emptyPage.html"
      >
        Service client{" "}
      </a>
      <a
        className="hideWhenPhone notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="emptyPage.html"
      >
        Nous contacter{" "}
      </a>
    </div>
  );
}
