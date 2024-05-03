import React from "react";
import Navigation from "../Navigation";
import { useState } from "react";
import AccountPost from "./AccountPost";

const AccountPatterns = ({ profilePic, username }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row w-full justify-between px-8 pb-4 items-center">
          <AccountPost
            title={"Baby Ducks"}
            postPic={"/patternImgs/ducks.jpg"}
          />
          <AccountPost
            title={"Beach Dress"}
            postPic={"/patternImgs/dress.jpg"}
          />
        </div>
        <div className="flex flex-row w-full justify-between px-8 pb-4 items-center">
          <AccountPost
            title={"Thick Scarf"}
            postPic={"/patternImgs/scarf.jpg"}
          />
          <AccountPost title={"Tied Top"} postPic={"/patternImgs/top.jpg"} />
        </div>
        <div className="flex flex-row w-full justify-between px-8 pb-4 items-center">
          <AccountPost
            title={"Winter Hat"}
            postPic={"/patternImgs/puffyHat.jpg"}
          />
          <AccountPost
            title={"Strawberry Dress"}
            postPic={"/patternImgs/strawberryDress.jpg"}
          />
        </div>
        <div className="flex flex-row w-full justify-between px-8 pb-4 items-center">
          <AccountPost
            title={"Fire Hat"}
            postPic={"/patternImgs/awesomeHat.webp"}
          />
          <AccountPost
            title={"Striped Pants"}
            postPic={"/patternImgs/pants.jpg"}
          />
        </div>
      </div>
    </>
  );
};

export default AccountPatterns;
