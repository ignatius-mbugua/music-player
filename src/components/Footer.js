import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer fixed-bottom bg-light">
        <div className="container text-center">
          <span className="text-muted">
            Music:
            <Link
              to={{ pathname: "https://www.bensound.com/royalty-free-music" }}
              target="_blank"
            >
              bensound.com
            </Link>
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
