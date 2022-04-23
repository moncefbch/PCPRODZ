import React from "react";
import FilterTag from "../components/FilterTag";
import SearchItem from "../components/SearchItem";

export default function SearchPage() {
  return (
    <div>
      <header className="font-cabin font-bold font-40 mrgnlft-50 mrgntp-30">
        Pc portable
      </header>
      <div className="flex-container mrgn-30">
        <div className="flex-item-left-25 radius-10 whitebackground">
          //-filter configuration-//
        </div>
        <div className="flex-item-right-70 radius-10 whitebackground">
          <header className="font-cabin font-bold font-30 mrgn-30">
            150 articles
          </header>
          <div className="d-flex flex-wrap paddingAuto">
            <FilterTag text={"filter 1"} />
            <FilterTag text={"filter 2"} />
            <FilterTag text={"filter 3"} />
            <FilterTag text={"filter 4"} />
          </div>
          <hr className="productMargin width80pc" />
          <br />
          <div className="d-flex flex-wrap paddingAuto">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
