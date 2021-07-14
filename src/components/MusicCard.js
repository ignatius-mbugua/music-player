import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

class MusicCard extends React.Component {
  render() {
    return (
      <div className="row pt-5">
        <div className="col-sm-12 col-md-6 mx-auto">
          {/* Card */}
          <div className="card">
            <div className="card-body text-center">
              {/* Image */}
              <img
                src="https://picsum.photos/id/1042/300"
                className="img-fluid rounded-circle"
                alt="music-art"
              />
              {/* Music info */}
              <h5 className="pt-3">Music Title</h5>
              <p>Artist</p>

              {/* Progress Bar*/}
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              {/* Control Buttons */}
              <div className="pt-4">
                <button
                  type="button"
                  className="btn btn-outline-primary float-left"
                >
                  <FontAwesomeIcon icon={faStepBackward} size="2x" />
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <FontAwesomeIcon icon={faPlay} size="2x" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary float-right"
                >
                  <FontAwesomeIcon icon={faStepForward} size="2x" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicCard;
