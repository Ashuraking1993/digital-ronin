import {
  Cpu,
  ScanFace,
  Swords,
  Radar,
} from "lucide-react";

import {
  useNavigate
} from "react-router-dom";

import {
  useState
} from "react";

import LoadingScreen from "./LoadingScreen";

import aboutLoading from "../assets/about-loading.mp4";

export default function FloatingDock(){

  const navigate = useNavigate();

  const [loadingPage, setLoadingPage] =
    useState(false);

  const [loadingText, setLoadingText] =
    useState("");

  /* reusable navigation */
  const handleNavigate = (
    path,
    text
  ) => {

    setLoadingText(text);

    setLoadingPage(true);

    setTimeout(() => {

      navigate(path);

      setLoadingPage(false);

    }, 2500);

  };

  return (

    <>

      {

        loadingPage && (

          <LoadingScreen
            video={aboutLoading}
            text={loadingText}
          />

        )

      }

      <div className="
        fixed
        bottom-6
        left-1/2
        -translate-x-1/2
        z-[99999]
      ">

        <div className="
          flex items-center gap-3
          px-4 py-3
          rounded-2xl
          bg-black/70
          backdrop-blur-md
          border border-red-500/20
          shadow-2xl
        ">

          {/* HOME */}
          <button

            onClick={() =>
              handleNavigate(
                "/",
                "RETURNING TO DIGITAL RONIN..."
              )
            }

            className="
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-[rgba(20,20,20,0.95)]
              text-white
              transition-all duration-300
              hover:scale-110
              hover:bg-red-500/20
            "
          >

            <Cpu size={22} />

          </button>

          {/* ABOUT */}
          <button

            onClick={() =>
              handleNavigate(
                "/about",
                "ACCESSING RONIN ARCHIVES..."
              )
            }

            className="
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-[rgba(20,20,20,0.95)]
              text-white
              transition-all duration-300
              hover:scale-110
              hover:bg-red-500/20
            "
          >

            <ScanFace size={22} />

          </button>

          {/* PROJECTS */}
          <button

            onClick={() =>
              handleNavigate(
                "/projects",
                "LOADING PROJECT DATABASE..."
              )
            }

            className="
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-[rgba(20,20,20,0.95)]
              text-white
              transition-all duration-300
              hover:scale-110
              hover:bg-red-500/20
            "
          >

            <Swords size={22} />

          </button>

          {/* EXTRA */}
          <button
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-[rgba(20,20,20,0.95)]
              text-white
              transition-all duration-300
              hover:scale-110
              hover:bg-red-500/20
            "
          >

            <Radar size={22} />

          </button>

        </div>

      </div>

    </>

  );

}