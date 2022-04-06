import React from "react";

export default function MostVisitedCathegories() {
  return (
    <div>
      <div
        className="font-cabin width-full align-center font-40"
        style={{ paddingTop: "150px" }}
      >
        <header>LES CATHEGORIES LES PLUS VISITES</header>
      </div>
      <div
        className="flex-container informationspanel"
        style={{ paddingBottom: "30px", marginBottom: "100px" }}
      >
        <div className="flex-item-left">
          <div className="flex-container ">
            <div className="flex-item-left" style={{ padding: "10px" }}>
              <div
                style={{ paddingTop: "40px", paddingBottom: "40px" }}
                className="zoomwhenhover shadowForMainSquareType width-full radius-10 bodyBackground align-center padding"
              >
                <img
                  className=""
                  width="30%"
                  height="40%"
                  src="images/mouse.png"
                  alt=""
                />
                <header
                  style={{ paddingTop: "20px" }}
                  className="font-cabin font-20"
                >
                  Mouse
                </header>
                <small className="form-text text-muted font-cabin ">
                  Voir plus{" "}
                </small>
              </div>
              <div
                style={{
                  paddingTop: "40px",
                  marginTop: "20px",
                  paddingBottom: "40px",
                }}
                className="zoomwhenhover shadowForMainSquareType width-full radius-10 bodyBackground align-center padding"
              >
                <img
                  className=""
                  width="60%"
                  height="75%"
                  src="images/camera.png"
                  alt=""
                />
                <header
                  style={{ paddingTop: "20px" }}
                  className="font-cabin font-20"
                >
                  Camera
                </header>
                <small className="form-text text-muted font-cabin ">
                  Voir plus{" "}
                </small>
              </div>
            </div>
            <div className="flex-item-right" style={{ padding: "10px" }}>
              <div
                style={{
                  paddingTop: "40px",
                  paddingBottom: "40px",
                  height: "100%",
                }}
                className="zoomwhenhover shadowForMainSquareType width-full radius-10 bodyBackground align-center padding"
              >
                <img
                  className=""
                  width="100%"
                  height="80%"
                  src="images/phone.png"
                  alt=""
                />
                <header
                  style={{ paddingTop: "20px" }}
                  className="font-cabin font-20"
                >
                  Téléphones
                </header>
                <small className="form-text text-muted font-cabin ">
                  Voir plus{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-item-right" style={{ padding: "10px" }}>
          <div
            style={{
              paddingTop: "0px",
              paddingBottom: "10px",
              height: "100%",
            }}
            className="zoomwhenhover shadowForMainSquareType width-full radius-10 bodyBackground align-center padding"
          >
            <img
              className=""
              width="60%"
              height="80%"
              src="images/pc.png"
              alt=""
            />
            <header
              style={{ paddingTop: "20px" }}
              className="font-cabin font-20"
            >
              Ordinateurs
            </header>
            <small className="form-text text-muted font-cabin ">
              Voir plus{" "}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
