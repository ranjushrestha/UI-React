import React from "react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const Page1Content = () => {
  return (
    <div className="flex items-center gap-5 px-8 py-6 h-[90vh] ">
      <LeftContent />
      <RightContent />{" "}
    </div>
  );
};

export default Page1Content;
