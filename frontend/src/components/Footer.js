import React from "react";

export default function Footer() {
  return (
    <footer className="footer-dark" style={{ marginTop: "132px" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 item">
            <h3>
              A propos
              <br />
            </h3>
            <ul>
              <li>
                <a href="/">xxxxxxxxxx</a>
              </li>
              <li>
                <a href="/">xxxxxxxxxx</a>
              </li>
              <li>
                <a href="/">xxxxxxxxxx</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 item">
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="/">xxxxxxxxxx 1</a>
              </li>
              <li>
                <a href="/">
                  xxxxxxxxxx 2<br />
                </a>
              </li>
              <li>
                <a href="/">
                  xxxxxxxxxx 3<br />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 item text">
            <h3>Company Name</h3>
            <p>xxxxxxxxxxxxxxxxxxxxxxx.</p>
          </div>
          <div className="col item social">
            <a href="/">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="/">
              <i className="icon ion-social-twitter"></i>
            </a>
            <a href="/">
              <i className="icon ion-social-snapchat"></i>
            </a>
            <a href="/">
              <i className="icon ion-social-instagram"></i>
            </a>
          </div>
        </div>
        <p className="copyright">Pc Pro Dz © 2022</p>
      </div>
    </footer>
  );
}
