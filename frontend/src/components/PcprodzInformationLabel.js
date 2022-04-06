import React from "react";

export default function PcprodzInformationLabel() {
  return (
    <div className="flex-container informationspanel">
      <div className="flex-item-left">
        <h1 className="font-cabin">PC PRO DZ</h1>
        <h3 className="font-cabin">ALGER, ALGERIE</h3>
        <br />
        <h3 className="font-cabin font-bold">
          Adresse : cité 1577 logts AADL Bt:06 N°16, Bab Ezzouar
        </h3>
        <h3 className="font-cabin font-bold">
          Coordonés : 36.7192013152, 3.19091677666
        </h3>
      </div>

      <div className="flex-item-right">
        <div
          id="carouselExampleIndicators2"
          className="carousel slide carousel-tt"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner radius-20">
            <div className="carousel-item active">
              <img src="images/5.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/5.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/5.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <iframe
        title="pcprodz_shop_map"
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.5464325552863!2d3.183110022113789!3d36.71810039597305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e516021906a95%3A0x4eead6555d1c4d87!2sPC%20PRO%20DZ!5e0!3m2!1sfr!2sdz!4v1647982967741!5m2!1sfr!2sdz"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
