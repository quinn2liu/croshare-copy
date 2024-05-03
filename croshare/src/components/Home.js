import React from "react";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import HomePost from "./HomePost";

const Home = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white z-50 rounded-md shadow-sm">
        <p className="text-2xl font-bold pt-4 pl-4 pb-3 font-fredoka">
          CroShare
        </p>
        <div className="fixed top-4 right-4 z-10 bg-yellow-400 p-1.5 w-8 h-8 rounded-full flex items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-white mr-2"
          />
        </div>
        <div className="flex overflow-auto flex-row py-2 px-3 mx-4 my-2 border-2 rounded-lg border-gray-200 items-center">
          <FontAwesomeIcon
            className="text-lg text-gray-400 mr-3"
            icon={faFilter}
          />
          <div className="text-sm text-white font-semibold p-2 mr-3 bg-teal-500 rounded-2xl">
            New
          </div>
          <div className="text-sm text-white font-semibold p-2 mr-3 bg-teal-500 rounded-2xl">
            Seasonal
          </div>
          <div className="text-sm text-white p-2 mr-3 bg-gray-400 rounded-2xl">
            Time
          </div>
          <div className="text-sm text-white p-2 mr-3 bg-gray-400 rounded-2xl">
            Difficulty
          </div>
          <div className="text-sm text-white p-2 mr-3 bg-gray-400 rounded-2xl">
            Trending
          </div>
          <div className="text-sm text-white p-2 mr-3 bg-gray-400 rounded-2xl">
            Rating
          </div>
        </div>
      </div>

      <div className="flex flex-col pb-20 pt-32">
        <div className="flex flex-row justify-between align-middle w-full space-x-4 px-4 py-4">
          <HomePost
            className="h-1/3"
            img={"/patternImgs/awesomeHat.webp"}
            title={"Fire Hat"}
            user={"quinnliu"}
            profilePic={"/quinnpfp.jpg"}
            rating={4.8}
            time={5}
            difficulty={"Easy"}
            stitch={3}
            color={2}
          />
          <HomePost
            className="h-1/3"
            img={"/patternImgs/dress.jpg"}
            title={"Beach Dress"}
            user={"alyanton"}
            profilePic={"/quinnpfp.jpg"}
            rating={4.8}
            time={5}
            difficulty={"Easy"}
            stitch={3}
            color={2}
          />
        </div>
        <div className="flex flex-row justify-between align-middle w-full space-x-4 px-5 py-2">
          <HomePost
            className="h-1/3"
            img={"/patternImgs/pants.jpg"}
            title={"Striped Pants"}
            user={"kyuholee"}
            profilePic={"/quinnpfp.jpg"}
            rating={4.8}
            time={5}
            difficulty={"Easy"}
            stitch={3}
            color={2}
          />
          <HomePost
            className="h-1/3"
            img={"/patternImgs/top.jpg"}
            title={"Tied Top"}
            user={"diannatr"}
            profilePic={"/quinnpfp.jpg"}
            rating={4.8}
            time={5}
            difficulty={"Easy"}
            stitch={3}
            color={2}
          />
        </div>
        <div className="flex flex-row justify-between align-middle w-full space-x-4 px-4 py-2">
          <HomePost
            className="h-1/3"
            img={"/patternImgs/strawberryDress.jpg"}
            title={"Picnic Dress"}
            user={"mainaiya"}
            profilePic={"/quinnpfp.jpg"}
            rating={4.8}
            time={5}
            difficulty={"Easy"}
            stitch={3}
            color={2}
          />
          <HomePost
            className="h-1/3"
            img={"/patternImgs/puffyHat.jpg"}
            title={"Winter Hat"}
            user={"williamts"}
            profilePic={"/quinnpfp.jpg"}
            rating={4.8}
            time={5}
            difficulty={"Easy"}
            stitch={3}
            color={2}
          />
        </div>
        <div className="flex flex-row justify-between align-middle w-full space-x-4 px-4 py-2">
          <HomePost
            className="h-1/3"
            img={"/patternImgs/ducks.jpg"}
            title={"Baby Ducks"}
            user={"clairybeary"}
            profilePic={"/quinnpfp.jpg"}
            rating={4.8}
            time={5}
            difficulty={"Easy"}
            stitch={3}
            color={2}
          />
          <HomePost
            className="h-1/3"
            img={"/patternImgs/scarf.jpg"}
            title={"Thick Scarf"}
            user={"johnnydang"}
            profilePic={"/quinnpfp.jpg"}
            rating={4.8}
            time={5}
            difficulty={"Easy"}
            stitch={3}
            color={2}
          />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20">
        <Navigation />
      </div>
    </>
  );
};

export default Home;
