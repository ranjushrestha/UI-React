import React from "react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";
import { RightCardProvider } from "../context/RightCardContext";

const Page1Content = () => {
  return (
    <div className="flex items-center gap-5 px-8 py-6 h-[90vh] ">
      <LeftContent />
      <RightCardProvider>
        <RightContent />
      </RightCardProvider>
    </div>
  );
};

export default Page1Content;
