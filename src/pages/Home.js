import React from "react";
import Search from "../components/Search/Search";
import "./home.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <section>
      <div className="home">
        <Header />
        <section className="home__body">
          <h1 className="logo">SearchX</h1>
          <Search />
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default Home;
