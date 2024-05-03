import React, { useState } from "react";
import Navigation from "../Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faClock,
  faChartSimple,
  faXmarksLines,
  faPalette,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HomePost from "../HomePost";
import { Link, useLocation, useParams } from "react-router-dom";

const Pattern = () => {
  let location = useLocation();
  let {
    username,
    img,
    title,
    profilePic,
    rating,
    time,
    difficulty,
    stitch,
    color,
  } = location.state;

  const wholeStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);
  const starStyle = {
    stroke: "black",
    strokeWidth: 30,
  };

  return (
    <>
      <div className="flex flex-col pb-4">
        <Link to="/" className="absolute top-0 left-0 p-5">
          <FontAwesomeIcon
            className="text-2xl cursor-pointer"
            icon={faAngleLeft}
          />
        </Link>

        <h1 className="pt-4 pb-4 text-2xl text-black font-semibold font-fredoka text-center">
          {username}'s {title}
        </h1>
        <img src={img} className="w-3/4 mx-auto rounded-2xl pt-2 pb-2" />
        <div className="flex justify-center p-2">
          <div className="bg-blue-200 rounded-full border-2 border-black px-2 py-1 mx-2 text-sm flex items-center font-semibold font-fredoka">
            View Pattern
          </div>
          <div className="bg-blue-200 rounded-full  border-2 border-black px-2 py-1 mx-2 text-sm flex items-center font-semibold font-fredoka">
            Download Pattern
          </div>
          <Link
            className="bg-blue-200 rounded-full  border-2 border-black px-2 py-1 mx-2 text-sm flex items-center font-semibold font-fredoka"
            to={"/reviews"}
            state={{
              username: username,
              img: img,
              title: title,
              profilePic: profilePic,
              rating: rating,
              time: time,
              difficulty: difficulty,
              stitch: stitch,
              color: color,
            }}
          >
            Reviews
          </Link>
        </div>

        <div className="pt-2">
          <h2 className="text-lg text-black font-semibold font-fredoka text-center underline pb-2">
            Metrics
          </h2>
          <div className="flex items-center justify-center">
            {[...Array(wholeStars)].map((e, i) => (
              <FontAwesomeIcon
                className="pl-1/2 pr-1"
                key={i}
                icon={faStar}
                color="gold"
                style={starStyle}
                size="lg"
              />
            ))}
            {halfStar && (
              <FontAwesomeIcon
                className="pl-1/2"
                icon={faStarHalfAlt}
                color="gold"
                style={starStyle}
                size="lg"
              />
            )}
            {[...Array(emptyStars)].map((e, i) => (
              <FontAwesomeIcon
                className="pl-1/2"
                key={i + wholeStars + (halfStar ? 1 : 0)}
                icon={["far", "star"]}
                color="gray"
                style={starStyle}
                size="lg"
              />
            ))}
          </div>
          <div className="pl-2 text-sm text-center pt-1 pb-2">
            {rating} stars based on 1234 reviews
          </div>

          <table className="table-auto mx-auto w-3/4 bg-yellow-200 border-2 border-separate border-black rounded-xl border-spacing-0">
            <tbody>
              <tr>
                <td className="px-4 py-3 text-center font-semibold border-r-2 border-black ">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  {time} hours
                </td>
                <td className="px-4 py-3 text-center font-semibold ">
                  <FontAwesomeIcon icon={faChartSimple} className="mr-2" />
                  {difficulty}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-center font-semibold  border-t-2 border-r-2 border-black">
                  <FontAwesomeIcon icon={faXmarksLines} className="mr-2" />
                  {stitch} stitches
                </td>
                <td className="px-4 py-3 text-center font-semibold  border-t-2 border-black">
                  <FontAwesomeIcon icon={faPalette} className="mr-2" />
                  {color} color(s)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pt-4 ">
          <h2 className="text-lg text-black font-semibold font-fredoka text-center underline pb-2">
            Description
          </h2>
          <p className="text-left pl-12 pr-12 pb-12 text-grey">
            Now let me tell you about this pattern. Ohhhhh it is so nice. Like
            you would not beleive it. Even though it is in fact called an
            awesome hat, I don't think the name "awesome" really does it
            justice. But then I'd be like tooting my own horn about How awesome
            I made the hat, so we can just leave it at plain awesome.
          </p>
        </div>
        <div className="fixed inset-x-0 bottom-0 z-20">
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default Pattern;
