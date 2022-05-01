import React from "react";

export default function CarouselImageSlider() {
  return (
    <div
      style={{ zIndex: "0" }}
      id="carouselExampleIndicators"
      className="carousel slide carousel-tt"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/EheaJhKU0AEU6rq-2.webp"
            className="d-block w-100 width-full carouselimageresponsive"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/asus-rog-zephyrus-g14-ga401.jpg"
            className="d-block w-100 width-full carouselimageresponsive"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/Mi_Curved_Gaming_Monitor_34_inch_header.jpg"
            className="d-block w-100 width-full carouselimageresponsive"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
