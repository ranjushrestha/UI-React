import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = ({user}) => {
  return (
    <div className="h-full shrink-0  w-60 overflow-hidden relative bg-green-500 rounded-3xl">
      <img
        className="h-full w-full object-cover"
        src={user.image}
        alt=""
      />
  <RightCardContent user={user}/>
    </div>
  );
};

export default RightCard;
