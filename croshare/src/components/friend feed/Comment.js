import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Comment = ({ username, profilePic, content, timePosted }) => {
  return (
    <>
      <div className="flex flex-col w-full pt-4">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center bg-blue-300 rounded-full w-24">
              <img src={profilePic} alt="" className="w-6 h-6 rounded-full" />
              <p className="pl-2 text-sm text-white">{username}</p>
            </div>
            <p className="text-gray-400 text-sm pl-2">{timePosted}</p>
          </div>
          <FontAwesomeIcon
            className="text-gray-400 text-xl"
            icon={faEllipsis}
          />
        </div>
        <p className="text-gray-500 text-sm py-2">{content}</p>
      </div>
    </>
  );
};

export default Comment;
