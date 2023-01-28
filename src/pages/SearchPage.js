import React from "react";
import "./SearchPage.css";
import Header from "../components/Header/Header";
import { UseStateValue } from "../StateProvider";
import Search from "../components/Search/Search";

function SearchPage() {
  const [{ term }, dispatch] = UseStateValue();

  return (
    <section className="SearchPage">
      <Header />
      <h1>{term}</h1>

      <Search hideButtons />
    </section>
  );
}

export default SearchPage;
