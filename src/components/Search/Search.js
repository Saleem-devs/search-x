import React, { useState } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { UseStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = UseStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    console.log(input);

    navigate("/search");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };

  const helloWorld = (e) => {
    e.preventDefault();

    navigate("/search");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: "Hello World!",
    });
  };

  // AIzaSyCKsjD_wzfDU9I2sGkZwqxgm2VjeBL5_2Q

  return (
    <form className="search">
      <div className="search__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <div className="btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={search} />
        </div>
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <button type="submit" onClick={search}>
            {" "}
            Search Now
          </button>
          <button onClick={helloWorld}>Hello World! </button>
        </div>
      ) : (
        <div className="search__buttons buttons__hidden">
          <button type="submit" onClick={search}>
            {" "}
            Search Now
          </button>
          <button onClick={helloWorld}>Hello World! </button>
        </div>
      )}
    </form>
  );
}

export default Search;
