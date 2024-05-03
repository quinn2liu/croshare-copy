import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faAlignCenter,
  faHeart as faSolidHeart,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Comment from "./Comment";
import Navigation from "../Navigation";

const FriendPostSelected = () => {
  const location = useLocation();
  let { title, postPic, postTime, description, username, profilePic } =
    location.state;
  return (
    <>
      <div className="flex flex-col items-start px-8 pt-8 pb-36">
        <Link to="/friendfeed">
          <FontAwesomeIcon className="text-3xl pb-4" icon={faAngleLeft} />
        </Link>
        <img className="rounded-xl" src={postPic} alt="" />
        <div className="flex flex-row justify-between items-start w-full pt-4 pb-2">
          <div className="flex flex-row items-center bg-blue-300 p-1.5 rounded-full w-28">
            <img src={profilePic} alt="" className="w-6 h-6 rounded-full" />
            <p className="pl-2 text-sm text-white font-semibold">{username}</p>
          </div>
          <div className="flex flex-row">
            <div className="flex items-center justify-center bg-yellow-300 p-1.5 w-8 h-8 rounded-full">
              <FontAwesomeIcon icon={faComment} className="text-white" />
            </div>
            <div className="px-1"></div>
            <div className="flex items-center justify-center  bg-red-300 p-1.5 w-8 h-8 rounded-full">
              <FontAwesomeIcon icon={faHeart} className="text-white" />
            </div>
          </div>
        </div>
        <p className="font-semibold font-fredoka text-xl">{title}</p>
        <p className="text-gray-400 text-sm py-2">{postTime} - April 5, 2024</p>
        <p className="flex flex-row text-black text-sm">{description}</p>
        <div className="my-4 border-t-2 w-full border-gray-300" />
        <div className="py-2 px-4  bg-gray-200 text-gray-400 w-full rounded-lg text-sm">
          Add a comment...
        </div>
        <Comment
          username={"alyanton"}
          profilePic={profilePic}
          content={
            "wow this is great! really feeling the kachow with this one!"
          }
          timePosted={"8 hr ago"}
        />
        <Comment
          username={"kyuholee"}
          profilePic={profilePic}
          content={"mmmm, not a fan. do better next time"}
          timePosted={"1 hr ago"}
        />
        <Comment
          username={"diannatr"}
          profilePic={profilePic}
          content={"I CHANGED MY MIND I LOVE IT!!!!"}
          timePosted={"3 min ago"}
        />
      </div>
      <div className="fixed inset-x-0 bottom-0">
        <Navigation />
      </div>
    </>
  );
};

export default FriendPostSelected;
