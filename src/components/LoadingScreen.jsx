import { motion } from "framer-motion";

import introVideo from "../assets/loading.mp4";

function LoadingScreen({
  video,
  text,
  isIntro = false
}) {

  return (

    <motion.div
      className="loading-screen"

      initial={{
        opacity: 0
      }}

      animate={{
        opacity: 1
      }}

      exit={{
        opacity: 0
      }}

      transition={{
        duration: 0.8
      }}
    >

      <video
        autoPlay
        muted
        playsInline
        className="loading-video"
      >

        <source
          src={video || introVideo}
          type="video/mp4"
        />

      </video>

      <div className="loading-overlay"></div>

      <div className="loading-content">

        <motion.h1
          className="awakening-text"

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 0.8,
            duration: 1
          }}
        >

          {
            text || "DIGITAL RONIN"
          }

        </motion.h1>

        <motion.p
          className="awakening-sub"

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: [0, 1, 0, 1]
          }}

          transition={{
            delay: 1.2,
            repeat: Infinity,
            duration: 1
          }}
        >

          {
            isIntro
              ? "INITIALIZING COMBAT SYSTEM..."
              : "ACCESSING RONIN ARCHIVES..."
          }

        </motion.p>

      </div>

    </motion.div>

  );

}

export default LoadingScreen;