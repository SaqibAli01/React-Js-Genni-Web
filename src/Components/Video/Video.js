
import React, { useEffect, useRef } from "react";
import './Video.css';


export default function Video() {

  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);


  return (<>


    <div className="VideoApp">
      <div>

        <video
          className="Video"
          style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
          playsInline = " "
          loop = " "
          muted
          // controls
          alt="All the devices"
          src="masthead2.mp4"
          ref={videoEl}
        />
      </div>


    </div>

  </>)
}
