import React from "react";

export default function TitleIndex(props) {
  return (
    <div>
      <section id="sec01">
        <div className="my-h1 pt-50 ta-c">
          <h1 className="fz-48">Study {props.tag} Librarys.</h1>
        </div>
      </section>
    </div>
  );
}
