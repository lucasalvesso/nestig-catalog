import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PageHeader from "./components/page-header/PageHeader";
import CardList from "./components/card-list/CardList";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar></Navbar>
        <PageHeader></PageHeader>
      </div>
      <CardList></CardList>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
