import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Sakura from "./components/Sakura";
import CustomCursor from "./components/CustomCursor";
import FloatingDock from "./components/FloatingDock";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import themeMusic from "./assets/theme.mp3";

function App() {

  const [introLoading, setIntroLoading] =
    useState(true);

  useEffect(() => {

    const startMusic = () => {

      const music =
        document.getElementById("bg-music");

      if (music) {

        music.volume = 0.4;

        music.play().catch(() => {});

      }

      document.removeEventListener(
        "click",
        startMusic
      );

    };

    document.addEventListener(
      "click",
      startMusic
    );

    const timer = setTimeout(() => {

      setIntroLoading(false);

    }, 5000);

    return () => {

      clearTimeout(timer);

      document.removeEventListener(
        "click",
        startMusic
      );

    };

  }, []);

  return (

     <BrowserRouter>

    {

      introLoading ? (

        <LoadingScreen
          isIntro={true}
        />

      ) : (

        <>

          <audio
            id="bg-music"
            loop
          >

            <source
              src={themeMusic}
              type="audio/mp3"
            />

          </audio>

          <div className="app">

            <CustomCursor />

            <Navbar />

            <Routes>

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/about"
                element={<About />}
              />

              <Route
                path="/projects"
                element={<Projects />}
              />

            </Routes>

            <FloatingDock />
            

          </div>

        </>

      )

    }

  </BrowserRouter>

    
  );

}

export default App;