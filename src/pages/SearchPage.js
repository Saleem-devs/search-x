import React from "react";
import "./SearchPage.css";
import { UseStateValue } from "../StateProvider";
import Search from "../components/Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useGoogleSearch from "../useGoogleSearch";
import Footer from "../components/Footer/Footer";

function SearchPage() {
  const [{ term }, dispatch] = UseStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);

  return (
    <section className="SearchPage">
      <div className="header">
        <div className="logo__container">
          <Link to="/">
            <h1 className="search_logo">SearchX</h1>
          </Link>

          <Link className="home__Icon" to="/">
            <FontAwesomeIcon className="home__icon" icon={faHouse} />
          </Link>
        </div>
        <div className="header__Input">
          <Search hideButtons />
        </div>
      </div>

      {term && (
        <div className="searchPage__Results">
          <p className="searchPage__ResultsCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item, index) => {
            return (
              <div key={index} className="searchPage__Result">
                <a className="searchPage__ResultLink" href={item.link}>
                  {item.displayLink}
                </a>

                <a href={item.link} className="searchPage__ResultTitle">
                  <h2>{item.title}</h2>
                </a>

                <p className="searchPage__ResultSnippet">{item.snippet}</p>
              </div>
            );
          })}
          <p></p>
        </div>
      )}
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
}

export default SearchPage;
