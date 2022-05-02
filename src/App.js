import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Interest from "./components/interest";
import Footer from "./components/footer";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
