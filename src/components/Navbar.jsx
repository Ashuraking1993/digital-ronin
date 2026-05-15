import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import aboutLoading from "../assets/about-loading.mp4";

function Navbar() {

  const [musicOn, setMusicOn] = useState(true);
  const navigate = useNavigate();
  const [loadingPage, setLoadingPage] =
  useState(false);
  const openAbout = () => {

  setLoadingPage(true);

  setTimeout(() => {

    navigate("/about");

    setLoadingPage(false);

  }, 5000);

  };
  if (loadingPage) {

  return (

    <LoadingScreen
      video={aboutLoading}
      text="ACCESSING RONIN ARCHIVES..."
    />

  );

}

  return (

    <header className="navbar">

     

      <motion.h1
        className="ronin-logo"
      >

        {"ASHURA KING RYZEN".split("").map((char, index) => (

          <motion.span
            key={index}

            initial={{
              opacity: 0,
              scale: 2,
              filter: "blur(10px)"
            }}

            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)"
            }}

            transition={{
              duration: 0.8,
              ease: [0.075, 0.82, 0.165, 1],
              delay: index * 0.08,
              repeat: Infinity,
              repeatDelay: 4
            }}

            style={{
              display: "inline-block"
            }}
          >

            {char === " " ? "\u00A0" : char}

          </motion.span>

        ))}

      </motion.h1>

      <div className="nav-right">

        

        <button

          className="music-btn"

          onClick={() => {

            const music =
              document.getElementById("bg-music");

            if(!music) return;

            if(musicOn){

              music.pause();

            } else {

              music.play();

            }

            setMusicOn(!musicOn);

          }}

        >

          {musicOn ? "🎵" : "🔇"}

        </button>

      </div>

    </header>

  );

}

export default Navbar;