import React from "react";
import DateFns from "./Librarys/DateFns";
import Title from "./Title";

export default function Index() {
  return (
    <div id="index-page" className="wrap">
      <Title></Title>
      <DateFns></DateFns>
    </div>
  );
}
