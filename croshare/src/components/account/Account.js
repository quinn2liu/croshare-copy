import React from "react";
import Navigation from "../Navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountPosts from "./AccountPosts";
import AccountPatterns from "./AccountPatterns";
import { faEtsy, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Account = ({ profilePic, username }) => {
  const [posts, setPosts] = useState(true);
  return (
    <>
      <div className="pt-12 flex flex-col items-center">
        <div className="flex flex-row items-center">
          <img src={profilePic} alt="" className="w-20 h-20 rounded-full" />
          <div className="flex flex-col px-4">
            <p className="font-semibold font-fredoka text-3xl">{username}</p>
            <p className="font-semibold">crosharing since 1/1/24</p>
            <div className="flex space-x-4 mt-1">
              <button className="bg-orange-500 p-1 rounded-full w-14">
                <FontAwesomeIcon icon={faEtsy} className="text-white" />
              </button>
              <button className="bg-red-500 p-1 rounded-full w-14">
                <FontAwesomeIcon icon={faYoutube} className="text-white" />
              </button>
            </div>
          </div>
        </div>
        <div onClick={() => setPosts(!posts)}>
          {posts ? (
            <div className="flex flex-row w-1/2 justify-between align-center py-6">
              <p className="bg-blue-300 py-1 px-8 rounded-l-md font-semibold text-white text-sm">
                Posts
              </p>
              <p className="bg-gray-400 flex-grow py-1 px-8 rounded-r-md font-semibold text-white text-sm">
                Patterns
              </p>
            </div>
          ) : (
            <div className="flex flex-row w-1/2 justify-between align-center py-6">
              <p className="bg-gray-400 py-1 px-8 rounded-l-md font-semibold text-white text-sm">
                Posts
              </p>
              <p className="bg-blue-300 flex-grow py-1 px-8 rounded-r-md font-semibold text-white text-sm">
                Patterns
              </p>
            </div>
          )}
        </div>
        {posts ? <AccountPosts /> : <AccountPatterns />}
      </div>
      <div className="fixed inset-x-0 bottom-0">
        <Navigation />
      </div>
    </>
  );
};

export default Account;
