import React from "react";
import Navbar from "./components/Navbar";
import MusicCard from "./components/MusicCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <MusicCard />
        </div>
      </div>
    );
  }
}

export default App;
