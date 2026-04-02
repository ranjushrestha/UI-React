import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";

const App = () => {
  const users = [
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet. ipsum dolor sit amet ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus cum ea. Ipsum, et dolore.",
      tag: "Underserved",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet. ipsum dolor sit amet ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus cum ea. Ipsum, et dolore.",
      tag: "Underbanked",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet. ipsum dolor sit amet ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus cum ea. Ipsum, et dolore.",
      tag: "Unreached",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet. ipsum dolor sit amet ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus cum ea. Ipsum, et dolore.",
      tag: "Marginalized",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet. ipsum dolor sit amet ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus cum ea. Ipsum, et dolore.",
      tag: "Unmet",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
