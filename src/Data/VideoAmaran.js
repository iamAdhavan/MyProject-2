import React from "react";
import "./Styles.css";
import ReactPlayer from "react-player";
function VideoAmaran(props) {
  var iswatched = false;
  var pause = false;
  var start = false;
  var play = false;
  console.log("playing",props.Play)
  console.log(iswatched);
  return (
    <div className="video">
      <h1>Watch Trailer</h1>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/hylIXfZeB4c?si=lts_dGJuUfB-VWs5"
          width="80%"
          height="80%"
          onEnded={() => {
            iswatched = true;
            props.onEnd(iswatched);
            //console.log("Video", iswatched);
          }}
          onPause={() => {
            pause = true;
            props.onPause(pause);
            //console.log("pause", pause);
          }}
          onStart={() => {
            start = true;
            props.onStart(start);
            //console.log("start");
          }}
          onPlay={() => {
            play = true;
            props.onPlay(play);
          }}
          playing={props.Play}
          controls
        />
      </div>
    </div>
  );
}

export default VideoAmaran;