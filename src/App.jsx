import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";

const App = () => {
  const users = [
    {
      image: "",
      intro: "",
      tag: "",
    },
    {
      image: "",
      intro: "",
      tag: "",
    },
    {
      image: "",
      intro: "",
      tag: "",
    },
    {
      image: "",
      intro: "",
      tag: "",
    },
    {
      image: "",
      intro: "",
      tag: "",
    },
  ];
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  );
};

export default App;
