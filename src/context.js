import React, { createContext, useState, useEffect } from "react";
import { API } from "./api";
export const MyContext = createContext("");

const AppContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API}/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <MyContext.Provider
      value={{ user, setUser, admin, setAdmin, movies, setMovies }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default AppContext;
