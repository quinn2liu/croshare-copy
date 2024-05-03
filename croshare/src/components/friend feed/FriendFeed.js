import React from "react";
import Navigation from "../Navigation";
import FriendPost from "./FriendPost";

const FriendFeed = ({ profilePic, username }) => {
  return (
    <>
      <div className="flex flex-col py-12 px-5">
        <div className="fixed top-0 bg-white w-full">
          <p className="text-2xl font-bold font-fredoka pt-4 pb-4">Friends</p>
        </div>

        <div>
          <FriendPost
            title={"Made this dress for the beach!"}
            postPic={"/patternImgs/dress.jpg"}
            postTime={"4 min ago"}
            description={
              "I think it came out super cute. Kind of difficult in the beginning, but made do and learned some new stitches along the way!"
            }
            profilePic={"/quinnpfp.jpg"}
            username={"alyanton"}
          />

          <FriendPost
            title={"New project: Striped Pants"}
            postPic={"/friendsProg/new.png"}
            postTime={"45 min ago"}
            description={""}
            profilePic={"/quinnpfp.jpg"}
            username={"williamts"}
          />

          <FriendPost
            title={"Look at this cool hat I made!"}
            postPic={"/patternImgs/awesomeHat.webp"}
            postTime={"2 hr ago"}
            description={
              "I really like this hat. This hat is awesome. I really like the flames, I feel just like lightning mcqueen."
            }
            profilePic={"/quinnpfp.jpg"}
            username={"quinnliu"}
          />

          <FriendPost
            title={"Kyuholee made progress on Winter Scarf!"}
            postPic={"/friendsProg/prog.png"}
            postTime={"6 hr ago"}
            description={""}
            profilePic={"/quinnpfp.jpg"}
            username={"kyuholee"}
          />
          <FriendPost
            title={"Can anyone test this pattern for me?"}
            postPic={"/patternImgs/top.jpg"}
            postTime={"9 hr ago"}
            description={
              "If you can, please let me know! Trying to get a sense of how accurate the size guidelines are :)"
            }
            profilePic={"/quinnpfp.jpg"}
            username={"diannatr"}
          />
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0">
        <Navigation />
      </div>
    </>
  );
};

export default FriendFeed;
