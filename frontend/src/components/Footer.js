import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer-dark" style={{ marginTop: "132px" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 item">
            <h3>
              A propos
              <br />
            </h3>
            <ul>
              <li>
                <a
                  style={{ color: "rgb(154, 154, 154)" }}
                  className="notextdecoration"
                  href="/"
                >
                  PC PRO DZ
                </a>
              </li>
              <li>
                <a
                  style={{ color: "rgb(154, 154, 154)" }}
                  className="notextdecoration"
                  href="/"
                >
                  Bab Ezzouar - ALGER
                </a>
              </li>
              <li>
                <a
                  style={{ color: "rgb(154, 154, 154)" }}
                  className="notextdecoration"
                  href="/"
                >
                  Notice D'Utilisation
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 item">
            <h3>Categories</h3>
            <ul>
              <li>
                <a
                  href="/"
                  style={{ color: "rgb(154, 154, 154)" }}
                  className="notextdecoration"
                >
                  Pc Portables
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{ color: "rgb(154, 154, 154)" }}
                  className="notextdecoration"
                >
                  Telephones Portables
                  <br />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{ color: "rgb(154, 154, 154)" }}
                  className="notextdecoration"
                >
                  Caméras
                  <br />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 item text">
            <h3>Nous Contacter</h3>
            <p>07 77 77 77 77</p>
            <p>pcprodz@pcpro.dz</p>
          </div>
          <div className="col item social">
            <a href="https://web.facebook.com/PcProDzALGER/?_rdc=1&_rdr">
              <i className="icon ion-social-facebook"></i>
            </a>

            <a href="https://www.instagram.com/pcprodz/?hl=fr">
              <i className="icon ion-social-instagram"></i>
            </a>
          </div>
        </div>
        <p className="copyright">Pc Pro Dz © 2022</p>
      </div>
    </footer>
  );
}
