import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeart,
  faChartBar,
  faClock,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faUserPlus,
  faAlignCenter,
  faHeart as faSolidHeart,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "./Navigation";

const HomePost = ({
  img,
  title,
  user,
  profilePic,
  rating,
  time,
  difficulty,
  stitch,
  color,
}) => {
  const [postClicked, setClicked] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <>
      {!postClicked ? (
        <div className="flex flex-col w-1/2 bg-neutral-100 rounded-lg">
          <Link
            to={"/pattern"}
            state={{
              img: img,
              title: title,
              profilePic,
              rating: rating,
              time: time,
              difficulty: difficulty,
              stitch: stitch,
              username: user,
              color: color,
            }}
          >
            <div className="flex flex-col relative" style={{ height: "25vh" }}>
              <img
                src={img}
                alt=""
                className="object-cover h-full rounded-lg"
              />
              <div className="flex flex-row items-center">
                <Link
                  to={"/account"}
                  className="absolute bottom-0 left-1 transform translate-y-1/2 flex flex-row items-center bg-teal-500 rounded-2xl h-5 z-10"
                >
                  <img
                    src={profilePic}
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="pl-2 text-xs text-white font-semibold">
                    {user}
                  </p>
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    className="text-white px-2 w-4 h-4 "
                  />
                </Link>

                <div
                  className="flex items-center justify-center absolute bottom-0 right-2 transform translate-y-1/2 bg-red-300 p-1.5 w-5 h-5 rounded-full"
                  onClick={() => setLiked(!liked)}
                >
                  {liked ? (
                    <FontAwesomeIcon
                      icon={faSolidHeart}
                      className="text-white p-2 w-2 h-2"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-white p-2 w-3 h-3"
                    />
                  )}
                </div>
              </div>
            </div>
          </Link>
          <div
            className="flex flex-col"
            onClick={() => setClicked(!postClicked)}
          >
            <div className="relative flex flex-row items-center pt-8 px-4">
              <p className="absolute left-2 font-semibold font-fredoka text-sm py-2 ">
                {title}
              </p>
              <div className="absolute right-4 flex flex-row items-center text-sm pt-1">
                <FontAwesomeIcon icon={faStar} />
                <p className="font-semibold pl-1 text-xs">{rating}</p>
              </div>
            </div>
            <div
              className="relative flex flex-row mt-6 px-2 py-1 justify-between text-xs border rounded-full bg-gray-100"
              onClick={() => setClicked(!postClicked)}
            >
              <div className="flex flex-row items-center">
                <FontAwesomeIcon icon={faClock} className="text-black mr-1.5" />
                <p>{time}</p>
              </div>
              <div className="flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faChartBar}
                  className="text-black mr-1.5"
                />
                <p>{difficulty}</p>
              </div>
              <div className="flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faAlignCenter}
                  className="text-black mr-1.5"
                />
                <p>{stitch} </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col w-1/2 pb-4">
            <div
              className="flex flex-col relative"
              style={{ height: "33.33vh" }}
            >
              <img
                src={img}
                alt=""
                className="object-cover h-full"
                onClick={() => setClicked(!postClicked)}
              />
              <div className="flex flex-row items-center">
                <Link
                  to={"/account"}
                  className="absolute bottom-0 left-2 transform translate-y-1/2 flex flex-row items-center bg-blue-300 p-1.5 rounded-2xl z-10"
                >
                  <img
                    src={profilePic}
                    alt=""
                    className="w-7 h-7 rounded-full"
                  />
                  <p className="pl-2 text-sm text-white font-semibold">
                    {user}
                  </p>
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    className="text-white pl-2"
                  />
                </Link>
                <div
                  className="flex items-center justify-center absolute bottom-0 right-2 transform translate-y-1/2 bg-blue-300 p-1.5 w-8 h-8 rounded-full"
                  onClick={() => setLiked(!liked)}
                >
                  {liked ? (
                    <FontAwesomeIcon
                      icon={faSolidHeart}
                      className="text-white"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} className="text-white" />
                  )}
                </div>
              </div>
            </div>
            <div
              className="flex flex-col"
              onClick={() => setClicked(!postClicked)}
            >
              <div className="relative flex flex-row items-center pt-8 px-4">
                <p className="absolute left-4 font-semibold font-fredoka text-md">
                  {title}
                </p>
                <div className="absolute right-4 flex flex-row items-center text-sm">
                  <FontAwesomeIcon icon={faStar} />
                  <p className="font-semibold pl-1">{rating}</p>
                </div>
              </div>
              <div className="relative flex flex-row pt-6 px-4 justify-between text-xs">
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-black mr-1.5"
                  />
                  <p>{time}</p>
                </div>
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={faChartBar}
                    className="text-black mr-1.5"
                  />
                  <p>{difficulty}</p>
                </div>
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={faAlignCenter}
                    className="text-black mr-1.5"
                  />
                  <p>{stitch} </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 inset-0 z-20 bg-white bg-opacity-50">
            <div className="flex flex-col items-center justify-center min-h-screen">
              <div className="bg-yellow-100 h-96 w-4/5 rounded-xl p-4 shadow-xl">
                <FontAwesomeIcon
                  className="text-2xl z-40"
                  onClick={() => setClicked(!postClicked)}
                  icon={faAngleLeft}
                />
                <div className="flex flex-col items-center pb-2">
                  <p className="font-semibold font-fredoka text-xl mb-3 w-auto">
                    {title} Metrics
                  </p>
                  <FontAwesomeIcon className="text-2xl py-2" icon={faClock} />
                  <div className="flex flex-col items-start w-full">
                    <div className="flex-grow flex flex-row items-center pt-1 pb-1">
                      <div className="pr-12 text-xs">&lt; 3 hr</div>
                      <div
                        className="px-12 bg-blue-500 py-2"
                        style={{ width: `${difficulty * 10}%` }}
                      ></div>
                      <div className="pl-2 text-xs">12%</div>
                    </div>
                    <div className="flex-grow flex flex-row items-center pb-1">
                      <div className="pr-12 text-xs">&lt; 4 hr</div>
                      <div
                        className="px-8 bg-blue-500 py-2"
                        style={{ width: `${difficulty * 10}%` }}
                      ></div>
                      <div className="pl-2 text-xs">12%</div>
                    </div>
                    <div className="flex-grow flex flex-row items-center pb-1">
                      <div className="pr-12 text-xs">&lt; 5 hr</div>
                      <div
                        className="px-16 bg-blue-500 py-2"
                        style={{ width: `${difficulty * 10}%` }}
                      ></div>
                      <div className="pl-2 text-xs">12%</div>
                    </div>
                    <div className="flex-grow flex flex-row items-center pb-1">
                      <div className="pr-12 text-xs"> &gt; 6 hr</div>
                      <div
                        className="px-4 bg-blue-500 py-2"
                        style={{ width: `${difficulty * 10}%` }}
                      ></div>
                      <div className="pl-2 text-xs">12%</div>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    className="text-2xl py-2"
                    icon={faChartBar}
                  />
                  <div className="flex flex-col items-start w-full">
                    <div className="flex-grow flex flex-row items-center pt-1 pb-1">
                      <div className="pr-8 text-xs">Beginner</div>
                      <div
                        className="px-16 bg-green-500 py-2"
                        style={{ width: `${difficulty * 10}%` }}
                      ></div>
                      <div className="pl-2 text-xs">12%</div>
                    </div>
                    <div className="flex-grow flex flex-row items-center pb-1">
                      <div className="pr-11 text-xs">Novice</div>
                      <div
                        className="px-8 bg-green-500 py-2"
                        style={{ width: `${difficulty * 10}%` }}
                      ></div>
                      <div className="pl-2 text-xs">12%</div>
                    </div>
                    <div className="flex-grow flex flex-row items-center pb-1">
                      <div className="pr-3 text-xs">Intermediate</div>
                      <div
                        className="px-12 bg-green-500 py-2"
                        style={{ width: `${difficulty * 10}%` }}
                      ></div>
                      <div className="pl-2 text-xs">12%</div>
                    </div>
                    <div className="flex-grow flex flex-row items-center pb-1">
                      <div className="pr-12 text-xs">Expert</div>
                      <div
                        className="px-8 bg-green-500 py-2"
                        style={{ width: `${difficulty * 10}%` }}
                      ></div>
                      <div className="pl-2 text-xs">12%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-x-0 bottom-0 z-20">
                <Navigation />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomePost;
