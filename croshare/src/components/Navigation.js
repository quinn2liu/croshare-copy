import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faUserGroup, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full py-3 px-12 text-2xl bg-white">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/friendfeed">
          <FontAwesomeIcon icon={faUserGroup} />
        </Link>
        <Link to="/addpost">
          <FontAwesomeIcon icon={faSquarePlus}/>
        </Link>
        <Link to="/account">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </>
  );
};

export default Navigation;
