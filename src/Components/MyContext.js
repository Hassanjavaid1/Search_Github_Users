import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loader, setLoader] = useState(true);

  async function fetchGithubUser() {
    try {
      setLoader(true);
      const url = await fetch(`https://api.github.com/users/${searchQuery}`);
      const data = await url.json();
      setData(data);
      console.log(data);
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        searchQuery,
        setSearchQuery,
        fetchGithubUser,
        loader,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
