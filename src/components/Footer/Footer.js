import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <p>
        made with ❤ by{" "}
        <span
          onClick={() => {
            window.open("https://github.com/Saleem-devs", "_blank");
          }}
        >
          saleem
        </span>
      </p>
    </footer>
  );
}

export default Footer;
