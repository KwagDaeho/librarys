import React from "react";
import DateFns from "./Librarys/DateFns";
import TitleIndex from "./TitleIndex";
import "../asset/css/0-reset.css";
import "../asset/css/1-asset.css";
import "../asset/css/2-object.css";

export default function Index() {
  return (
    <div id="index-page" className="wrap">
      <TitleIndex tag="Time"></TitleIndex>
      <DateFns></DateFns>
    </div>
  );
}
