import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

class MusicCard extends React.Component {
  constructor() {
    super();
    // refs
    this.ref_music = React.createRef();
    this.ref_music_art = React.createRef();
    this.ref_progress = React.createRef();
    this.ref_main_progress = React.createRef();
    this.state = {
      songs: [
        {
          title: "Hey",
          artist: "Benjamin Tissot",
          name: "hey",
        },
        {
          title: "Summer",
          artist: "Benjamin Tissot",
          name: "summer",
        },
        {
          title: "Ukulele",
          artist: "Benjamin Tissot",
          name: "ukulele",
        },
        {
          title: "Buddy",
          artist: "Benjamin Tissot",
          name: "buddy",
        },
        {
          title: "Energy",
          artist: "Benjamin Tissot",
          name: "energy",
        },
        {
          title: "Evolution",
          artist: "Benjamin Tissot",
          name: "evolution",
        },
        {
          title: "Funny Song",
          artist: "Benjamin Tissot",
          name: "funnysong",
        },
        {
          title: "Happy Rock",
          artist: "Benjamin Tissot",
          name: "happyrock",
        },
        {
          title: "Moose",
          artist: "Benjamin Tissot",
          name: "moose",
        },
        {
          title: "Sunny",
          artist: "Benjamin Tissot",
          name: "sunny",
        },
      ],
      song_index: 0,
      is_playing: false,
      progress_percent: 0,
      song_duration: "0:00",
      song_curentTime: "0:00",
    };
  }

  // Lifecycle methods
  componentDidMount() {
    // event listeners
    this.ref_music.current.addEventListener(
      "timeupdate",
      this.timeUpdate,
      false
    );
    this.ref_music.current.addEventListener("ended", this.nextSong, false);
    this.ref_main_progress.current.addEventListener(
      "click",
      this.changeCurrentTime,
      false
    );
  }

  // Functions

  // play song
  playOrPauseSong = () => {
    let { is_playing } = this.state;
    if (!is_playing) {
      this.ref_music.current.play();
    } else {
      this.ref_music.current.pause();
    }
    this.setState({ is_playing: !is_playing });
  };

  // previous song
  previousSong = () => {
    let { is_playing } = this.state;
    let song_index = this.state.song_index - 1;
    if (song_index < 0) {
      this.setState({ song_index: this.state.songs.length - 1 });
    } else {
      this.setState({ song_index: song_index });
    }
    this.ref_music.current.load();
    this.ref_progress.current.style.width = "0%";
    this.setState({ progress_percent: 0 });
    if (is_playing) {
      this.ref_music.current.play();
    }
  };

  // next song
  nextSong = () => {
    let { is_playing } = this.state;
    let song_index = this.state.song_index + 1;
    if (song_index > this.state.songs.length - 1) {
      this.setState({ song_index: 0 });
    } else {
      this.setState({ song_index: song_index });
    }
    this.ref_music.current.load();
    this.ref_progress.current.style.width = "0%";
    this.setState({ progress_percent: 0 });
    if (is_playing) {
      this.ref_music.current.play();
    }
  };

  // update progress bar
  timeUpdate = () => {
    let duration = this.ref_music.current.duration;
    let currentTime = this.ref_music.current.currentTime;
    let progressPercent = ((currentTime / duration) * 100).toFixed(2);
    this.setState({ progress_percent: progressPercent });
    this.ref_progress.current.style.width = `${progressPercent}%`;
    let formattedCurrentTime = this.formatTime(parseInt(currentTime));
    this.setState({ song_curentTime: formattedCurrentTime });
    let formattedDuration = this.formatTime(duration);
    this.setState({ song_duration: formattedDuration });
  };

  // set progress bar on click
  changeCurrentTime = (e) => {
    let duration = this.ref_music.current.duration;
    let main_progress_width = this.ref_main_progress.current.clientWidth;
    let click_offset = e.offsetX;
    this.ref_music.current.currentTime =
      (click_offset / main_progress_width) * duration;
  };

  formatTime = (currentTime) => {
    if (isNaN(currentTime)) {
      return "0:00";
    }
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);
    seconds = seconds >= 10 ? seconds : "0" + (seconds % 60);
    let formatTime = minutes + ":" + seconds;
    return formatTime;
  };

  render() {
    let {
      is_playing,
      songs,
      song_index,
      progress_percent,
      song_curentTime,
      song_duration,
    } = this.state;
    return (
      <div className="row pt-5">
        <div className="col-sm-12 col-md-6 mx-auto">
          {/* Card */}
          <div className="card">
            <div className="card-body text-center">
              {/* Image */}
              <img
                id="music_img"
                ref={this.ref_music_art}
                src={`/images/${songs[song_index].name}.jpg`}
                className="img-fluid rounded-lg shadow-lg"
                width="300"
                height="200"
                alt="music-art"
              />

              {/* Audio */}
              <audio ref={this.ref_music} id="music">
                <source
                  src={`/music/${songs[song_index].name}.mp3`}
                  type="audio/ogg"
                />
                Your broswer doesn't support the audio element
              </audio>

              {/* Music info */}
              <div className="py-3">
                <h4>{songs[song_index].title}</h4>
                <p className="text-muted">{songs[song_index].artist}</p>
              </div>

              {/* Audio Time */}
              <div className="d-flex justify-content-between">
                <span id="currentTime">{song_curentTime}</span>
                <span id="songDuration">{song_duration}</span>
              </div>

              {/* Progress Bar*/}
              <div className="progress" ref={this.ref_main_progress}>
                <div
                  ref={this.ref_progress}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={progress_percent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              {/* Control Buttons */}
              <div className="pt-4">
                <FontAwesomeIcon
                  icon={faStepBackward}
                  size="2x"
                  onClick={this.previousSong}
                />

                {!is_playing ? (
                  <FontAwesomeIcon
                    icon={faPlay}
                    size="2x"
                    className="ml-5"
                    onClick={this.playOrPauseSong}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPause}
                    size="2x"
                    className="ml-5"
                    onClick={this.playOrPauseSong}
                  />
                )}

                <FontAwesomeIcon
                  icon={faStepForward}
                  size="2x"
                  className="ml-5"
                  onClick={this.nextSong}
                />
              </div>
              {/* Track numbers */}
              <div className="pt-4">
                <p className="text-muted">
                  {song_index + 1} / {songs.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicCard;
