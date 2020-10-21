import React from "react";

import "./search-box.styles.css";
//functional component, dont need life cycle methods and state
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
