import React, { useContext, useEffect, useState } from "react";
import "../CSS/Navbar.css";
import "../CSS/HomeQuery.css";
import { BsGithub } from "react-icons/bs";
import LoadingBar from "react-top-loading-bar";
import { MyContext } from "./MyContext";

export default function Navbar() {
  const { data, setData, searchQuery, setsearchquery, element, setelement } =
    useContext(MyContext);
  const [progress, setProgress] = useState(0);

  const handleOnClick = async () => {
    setProgress(progress + 10);
    const response = await fetch(`https://api.github.com/users/${searchQuery}`);
    setProgress(progress + 20);
    const res = await response.json();
    setData(res);
    setsearchquery(res);
    setProgress(progress + 100);
  };
  const handleOnChange = (e) => {
    setsearchquery(e.target.value);
  };
  useEffect(() => {
    handleOnClick();
  }, []);

  return (
    <>
      <div className="container">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h2>
            <a
              href="https://github.com/Hassanjavaid1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            Hassanjavaid
          </h2>
          <div>
            <input
              type="text"
              value={element}
              onChange={handleOnChange}
              placeholder="Search github..."
            />
            <button id="btn" onClick={handleOnClick}>
              Search
            </button>
          </div>
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
