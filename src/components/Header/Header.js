import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(
        new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header__Left">
          <Link to="/">
            {" "}
            <FontAwesomeIcon className="home__icon" icon={faHouse} />
          </Link>
        </div>

        <div className="header__Right">
          <p>{date}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
