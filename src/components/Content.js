import React from "react";

const Content = (props) => {
  return(
    <section style={{ backgroundColor: "yellow"}}>
    <h1>ini adalah app aa</h1>
    <h1>ini adalah app aa</h1>
    {props.children}
    </section>
  );
};

export default Content;