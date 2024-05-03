import React from "react";

const Review = ({
  title,
  reviewPic,
  reviewTime,
  description,
  time,
  difficulty,
  username,
  profilePic,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h2 className="text-md font-bold">{username}</h2>
          <p className="text-sm text-gray-500">{reviewTime}</p>
        </div>
      </div>
      {reviewPic && (
        <img
          src={reviewPic}
          alt="Review"
          className="w-1/2 h-auto rounded-lg mb-4"
        />
      )}
      <h1 className="text-xl font-semibold font-fredoka mb-2">{title}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center">
        <p className="mr-4">
          <strong>Time:</strong> {time} hrs
        </p>
        <p>
          <strong>Difficulty:</strong> {difficulty}
        </p>
      </div>
    </div>
  );
};

export default Review;
