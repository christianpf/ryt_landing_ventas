import {useState, useRef} from 'react'
import {AiOutlineArrowDown} from "react-icons/ai"

import videoSrc from "../../assets/video.mp4";
import playButton from "../../assets/play_button.png";

const VideoFull = ({width, height, activate}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideo = () => {
    if (!isPlaying) {
      videoRef.current.play();
      activate(true);
      
      setIsPlaying(!isPlaying);
    }

  };
  return (
    <div className="video__container">
      <h3><AiOutlineArrowDown />Mira este video y sabrás como <AiOutlineArrowDown/></h3>
      <video
        src={videoSrc}
        preload="true"
        width={width}
        height={height}
        ref={videoRef}
        onClick={handleVideo}
      ></video>
      {!isPlaying && (
        <button
          aria_label="iniciar video"
          onClick={handleVideo}
          className="play_button"
        >
          <img src={playButton} alt="Iniciar video" />
        </button>
      )}
    </div>
  )
}

export default VideoFull