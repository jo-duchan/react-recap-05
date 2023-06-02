import React from "react";

function MyParagraph(props) {
  console.log("MyParagraph RUNNING");
  return <p>{props.children}</p>;
}

export default MyParagraph;
