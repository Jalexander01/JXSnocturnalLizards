import React from "react";
import ReactDom from "react-dom";

var d = new Date();
var n = d.getFullYear();

const name = "Jimbo";
ReactDom.render(
  <div>
    <h1>Here</h1>
    <p>
      Geckos are a group of usually small, usually nocturnal lizards. They are
      found on every continent except Australia.
    </p>

    <p>
      Some species live in houses where they hunt insects attracted by
      artificial light.
    </p>
    <p>{name}</p>

    <p>Copyright {n}</p>
  </div>,
  document.getElementById("root")
);
