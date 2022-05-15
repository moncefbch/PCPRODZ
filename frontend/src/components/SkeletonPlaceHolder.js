import React from "react";

export default function SkeletonPlaceHolder() {
  return (
    <div className="width-full">
      <article className="cardd">
        <div className="cardd-body">
          <h5 className="cardd-title">Skeleton placeholder</h5>
          <div className="row">
            <article className="col-lg">
              <div
                className="bg-loading"
                style={{
                  height: "400px",
                  width: "280px",
                  marginLeft: "30px",
                  marginTop: "30px",
                }}
              ></div>
              <div
                className="bg-loading"
                style={{
                  width: "80px",
                  height: "20px",
                  marginLeft: "30px",
                }}
              ></div>
              <div
                className="bg-loading"
                style={{
                  width: "180px",
                  height: "20px",
                  marginLeft: "30px",
                }}
              ></div>
            </article>

            <article className="col-lg">
              <div
                className="bg-loading"
                style={{
                  height: "400px",
                  width: "280px",
                  marginLeft: "30px",
                  marginTop: "30px",
                }}
              ></div>
              <div
                className="bg-loading"
                style={{
                  width: "80px",
                  height: "20px",
                  marginLeft: "30px",
                }}
              ></div>
              <div
                className="bg-loading"
                style={{
                  width: "180px",
                  height: "20px",
                  marginLeft: "30px",
                }}
              ></div>
            </article>
            <article className="col-lg">
              <div
                className="bg-loading"
                style={{
                  height: "400px",
                  width: "280px",
                  marginLeft: "30px",
                  marginTop: "30px",
                }}
              ></div>
              <div
                className="bg-loading"
                style={{
                  width: "80px",
                  height: "20px",
                  marginLeft: "30px",
                }}
              ></div>
              <div
                className="bg-loading"
                style={{
                  width: "180px",
                  height: "20px",
                  marginLeft: "30px",
                }}
              ></div>
            </article>
          </div>
        </div>
      </article>
    </div>
  );
}
