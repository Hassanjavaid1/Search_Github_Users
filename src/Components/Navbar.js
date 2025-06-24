import React, { useContext, useEffect, useState } from "react";
import "../css/Navbar.css";
import "../css/HomeQuery.css";
import { BsGithub } from "react-icons/bs";
import LoadingBar from "react-top-loading-bar";
import { MyContext } from "./MyContext";

export default function Navbar() {
  const { searchQuery, setSearchQuery, fetchGithubUser } =
    useContext(MyContext);
  const [progress, setProgress] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();

    //Call API Function.
    fetchGithubUser();
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <BsGithub />
          <h1>Search Github</h1>
        </div>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="SEARCH GITHUB..."
            className="inputField"
          />
          <button id="btn">Search</button>
        </form>
      </div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
}
