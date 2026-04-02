import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = () => {
  return (
    <div className="h-full  w-60 overflow-hidden relative bg-green-500 rounded-3xl">
      <img
        className="h-full w-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
  <RightCardContent/>
    </div>
  );
};

export default RightCard;
