import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

class MusicCard extends React.Component {
  constructor(props) {
    super(props);
    this.music_ref = React.createRef();
    this.state = {
      songs: ["hey", "summer", "ukulele"],
      song_index: 0,
      song_title: "",
      is_playing: false,
    };
  }

  // Functions

  // load song
  loadSong = (songIndex) => {
    let song = this.state.songs[songIndex];
    this.setState({ song_title: song });
    this.music_img_ref.current.src = `/images/${song}.jpg`;
    this.music_ref.current.src = `/music/${song}.mp3`;
  };

  // play song
  playSong = () => {
    if (!this.state.is_playing) {
      this.music_ref.current.play();
      this.setState({ is_playing: true });
    } else {
      this.pauseSong();
    }
  };

  // pause song
  pauseSong = () => {
    this.music_ref.current.pause();
    this.setState({ is_playing: false });
  };

  // previous song
  previousSong = () => {
    var song_index = this.state.song_index - 1;
    if (song_index < 0) {
      this.setState({ song_index: this.state.songs.length - 1 });
    } else {
      this.setState({ song_index: song_index });
    }

    // this.loadSong(this.state.song_index);
    this.playSong();
  };

  // next song
  nextSong = () => {
    var song_index = this.state.song_index + 1;
    if (song_index > this.state.songs.length - 1) {
      this.setState({ song_index: 0 });
    } else {
      this.setState({ song_index: song_index });
    }
    this.playSong();
  };

  // update progress bar

  // set progress bar

  // duration and current time of song

  // Lifecycle methods
  componentDidMount() {
    // event listeners
    // functions
    // this.loadSong(this.state.song_index);
  }

  render() {
    return (
      <div className="row pt-5">
        <div className="col-sm-12 col-md-6 mx-auto">
          {/* Card */}
          <div className="card">
            <div className="card-body text-center">
              {/* Image */}
              <img
                id="music_img"
                src={`/images/${this.state.songs[this.state.song_index]}.jpg`}
                className="img-fluid rounded-circle"
                alt="music-art"
              />

              {/* Audio */}
              <audio
                ref={this.music_ref}
                src={`/music/${this.state.songs[this.state.song_index]}.mp3`}
                id="music"
              ></audio>

              {/* Music info */}
              <h5 className="pt-3">
                {this.state.songs[this.state.song_index]}
              </h5>

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
                  onClick={this.previousSong}
                >
                  <FontAwesomeIcon icon={faStepBackward} size="2x" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={this.playSong}
                >
                  {this.state.is_playing ? (
                    <FontAwesomeIcon icon={faPause} size="2x" />
                  ) : (
                    <FontAwesomeIcon icon={faPlay} size="2x" />
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary float-right"
                  onClick={this.nextSong}
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
