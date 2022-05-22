import React from "react";
import StyledComponents from "./Librarys/StyledComponents";
import MyTitle from "./MyTitle";

export default function MyIndex() {
  return (
    <div id="index-page" className="wrap">
      <MyTitle tag="Style" />
      <StyledComponents />
    </div>
  );
}
