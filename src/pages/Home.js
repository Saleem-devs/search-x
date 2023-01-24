import React from "react";
import Search from "../components/Search/Search";
import "./home.css";
import Header from "../components/Header/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <section className="home__body">
        <h1 className="logo">SearchX</h1>
        <Search />
      </section>
    </div>
  );
}

export default Home;
