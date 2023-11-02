import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchQuery, setsearchquery] = useState();
  const [element, setelement] = useState(searchQuery);
  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        searchQuery,
        setsearchquery,
        element,
        setelement,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
