import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const FriendPost = ({
  title,
  postPic,
  postTime,
  description,
  username,
  profilePic,
}) => {
  return (
    <>
      <div className="flex flex-col pt-4">
        <Link
          to="/friendpost"
          state={{
            title: title,
            postPic: postPic,
            postTime: postTime,
            description: description,
            username: username,
            profilePic: profilePic,
          }}
        >
          <img
            className="rounded-md object-cover w-full h-full mx-auto"
            src={postPic}
            alt=""
          ></img>
          <p className="text-gray-800 font-semibold font-fredoka text-xl pt-2">
            {title}
          </p>
        </Link>

        <div className="flex flex-row justify-between py-2">
          <div className="flex flex-row items-center">
            <Link to={"/account"}>
              <div className="flex flex-row items-center bg-blue-300 p-1.5 rounded-full w-28">
                <img src={profilePic} alt="" className="w-6 h-6 rounded-full" />
                <p className="pl-2 text-sm text-white font-semibold">
                  {username}
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm pl-2">{postTime}</p>
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
        <Link
          to="/friendpost"
          state={{
            title: title,
            postPic: postPic,
            postTime: postTime,
            description: description,
            username: username,
            profilePic: profilePic,
          }}
        >
          <p className="text-sm">{description}</p>
          <div className="border-t border-gray-400 w-full my-2"></div>
        </Link>
      </div>
    </>
  );
};

export default FriendPost;
