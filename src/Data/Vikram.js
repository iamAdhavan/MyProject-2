import { useEffect } from "react";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import Collapse from '@mui/material/Collapse';
import React, { useState } from "react";
import { Link as Link1 } from "react-scroll";
import "./Styles.css";
import Progressbar1 from "./Progressbar1"
import HeaderVikram from './HeaderVikram';
import VideoBrother from "./VideoBrother";
import VideoVikram from "./VideoVikram";



const Vikram = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  const [color1, setcolor1] = useState(false);
  const [color2, setcolor2] = useState(false);
  const [color3, setcolor3] = useState(false);
  const [color4, setcolor4] = useState(false);
  const [color5, setcolor5] = useState(false);
  const [play, setplay] = useState(false);
  console.log("color1", color1);
  const isStart = (start) => {
    if (start === true) {
      console.log("color1 before", color1);
      if (color1 === false) {
        handleSercolor1();
        console.log("color1 after", color1);
      }
    }
  };
  const isPlay = (play) => {
    if (play === true) {
      //console.log("color1 before",color1)
      if (color1 === false) {
        handleSercolor1();
        //console.log("color1 after",color1)
      }
    } else {
      if (color1 === true) {
        handleSercolor1();
        //console.log("color1 after",color1)
      }
    }
  };
  const iswatched = (watch) => {
    console.log("Menu", watch);
    if (watch === true) {
      console.log("color2 before", color2);
      if (color2 === false) {
        console.log("color2", color2);
        handleSercolor2();
      }
      if (color1 === true) {
        handleSercolor1();
      }
    }
  };

  const isPause = (pause) => {
    if (pause === true) {
      if (color1 === true) {
        handleSercolor1();
      }
    } else {
      if (color1 === false) {
        handleSercolor1();
      }
    }
  };
  const handleSercolor1 = () => {
    setplay(!play)
    setcolor1(!color1);
  };
  const handleSercolor2 = () => {
    setcolor2(!color2);
  };
  const handleSercolor3 = () => {
    if (color4 === false && color3 === false) {
      setcolor3(!color3);
    } else if (color3 === true && color4 === false) {
      setcolor3(!color3);
    } else if (color3 === false && color4 === true) {
      setcolor3(!color3);
      setcolor4(!color4);
    }
  };
  const handleSercolor4 = () => {
    if (color3 === false && color4 === false) {
      setcolor4(!color4);
    } else if (color4 === true && color3 === false) {
      setcolor4(!color4);
    } else if (color4 === false && color3 === true) {
      setcolor3(!color3);
      setcolor4(!color4);
    }
  };
  const handleSercolor5 = () => {
    setcolor5(!color5);
  };

  // const useEffect = () => {
  //   useEffect(() => {
  //       window.scrollTo(0, 0);
  //   , []);
  return (
    <div>
      
    <div className="hero-item">
      <HeaderVikram/>
    <div className="hero-item-content">
    <div className="item-content-wraper1">
      <div className="item-content-title "> VIKRAM </div>
      <div className="movie-title"> VIKRAM </div>
      <div className="movie-infos">
        <div className="movie-info">
          <span>8.3</span>
          {/* <span>|</span> */}
        </div>
        <div className="movie-info">
          {/* <span>4 Seasons</span> */}
          <span>|</span>
        </div>
        <div className="movie-info">
          <span>HD</span>
          <span>|</span>
        </div>
        <div className="movie-info">
          <span>U/A</span>
        </div>
      </div>
      <div className="item-content-description">
      A special investigator discovers a case of serial killings is not what it seems to be, and leading down this path is only going to end in a war between everyone involved.
      </div>
      <Link1 to="video" smooth={true} duration={1000}>
        <button className="but">Watch Trailer</button>
      </Link1>
    </div>
  </div>
</div>
<div className="mobile">
  <div className="movie-title">VIKRAM</div>
  <div className="movie-infos">
    <div className="movie-info">
      <span>8.3</span>
    </div>
    <div className="movie-info">
      {/* <span>|</span> */}
    </div>
    <div className="movie-info">
      {/* <span>4 Seasons</span> */}
    </div>
    <div className="movie-info">
      <span>|</span>
    </div>
    <div className="movie-info">
      <span>HD</span>
    </div>
    <div className="movie-info">
      <span>|</span>
    </div>
    <div className="movie-info">
      <span>U/A</span>
    </div>
  </div>
  <div className="item-content-description">
  A special investigator discovers a case of serial killings is not what it seems to be, and leading down this path is only going to end in a war between everyone involved.
  </div>
  <Link1 to="video" smooth={true} duration={1000}>
    <button className="but">Watch Trailer</button>
  </Link1>
</div>
<div className="Menu">
    <div className="lower">
      <div className="menu">
        
        <div className={!color1 ? "menu-item" : "menu-item-active"}>
          <span className="play">Play</span>
          <Link1
            to="video"
            smooth={true}
            duration={1000}
            className={!color1 ? "menu-item" : "menu-item-active"}
          >
            <PlayCircleFilledWhiteOutlinedIcon
              onClick={handleSercolor1}
            ></PlayCircleFilledWhiteOutlinedIcon>
          </Link1>
        </div>
        <div className={!color2 ? "menu-item" : "menu-item-active"}>
          <span className="Watched">Watched</span>
          <CheckCircleOutlineOutlinedIcon onClick={handleSercolor2} />
        </div>
        <div className={!color3 ? "menu-item" : "menu-item-active"}>
          <span className="like">Like</span>
          <ThumbUpAltOutlinedIcon onClick={handleSercolor3} />
        </div>
        <div className={!color4 ? "menu-item" : "menu-item-active"}>
          <span className="DisLike"> Unlike</span>
          <ThumbDownAltOutlinedIcon onClick={handleSercolor4} />
        </div>
        <div className={!color5 ? "menu-item" : "menu-item-active"}>
          <span className="Description">Description</span>
          <ArrowDropDownCircleOutlinedIcon onClick={handleSercolor5} />
        </div>
      </div>
    </div>
    <div>
      <Collapse in={color5}>
        <div className="des">
          <h3>
          Karnan an alcoholic enjoys a freak life but he gets brutally killed by a gang of masked men.Amar a black squad commando and is team is given the case.Amar sees that two other person were killed brutally in similar passion by the masked gang and they were government officials but is surprised why Karnan was killed as he was not connected to any government agencies.Amar's inquiry leads him to find that Karnan became an alcoholic,drug addict and womanizer after death of his son but also had another side of cold shoulder towards his grandson whose suffering from heart ailment and he lived for him.
          </h3>
        </div>
      </Collapse>
    </div>
    <Progressbar1 />
    <div className="border"></div>
    <section id="video">
      <VideoVikram
        onEnd={iswatched}
        onPause={isPause}
        onStart={isStart}
        onPlay={isPlay}
        Play={play}
      />
    </section>
  </div>
 </div>
      
   
      );
};

export default Vikram;
