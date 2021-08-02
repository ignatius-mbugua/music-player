import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import MusicCard from "./components/MusicCard";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <MusicCard />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
