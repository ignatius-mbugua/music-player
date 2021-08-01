import React from "react";
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
      <div className="App">
        <Navbar />
        <div className="container">
          <MusicCard />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
