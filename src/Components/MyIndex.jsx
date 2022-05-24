import React from "react";
import MyTitle from "./MyTitle";
// import StyledComponents from "./Librarys/StyledComponents";
import Emotion from "./Librarys/Emotion";

export default function MyIndex() {
  return (
    <div>
      <MyTitle tag="Style" />
      {/* <StyledComponents /> */}
      <Emotion />
    </div>
  );
}
