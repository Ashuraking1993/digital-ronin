import { useEffect, useState, useRef } from "react";

import kunai from "../assets/kunai.png";

function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const [idle, setIdle] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      });

      setIdle(false);

      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {

        setIdle(true);

      }, 3000);

    };

    window.addEventListener("mousemove", moveCursor);

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      clearTimeout(timeoutRef.current);

    };

  }, []);

  return (

  <>
  <img
    src={kunai}
    alt=""
    className={`kunai-cursor ${idle ? "idle" : ""}`}

    style={{
      left: position.x + "px",
      top: position.y + "px"
    }}
  />

  {idle && (

    <div
      className="idle-sparks"

      style={{
        left: position.x + "px",
        top: position.y + "px"
      }}
    >

      <span></span>
      <span></span>
      <span></span>
      <span></span>

    </div>

  )}

    </>
    
      
  );

}

export default CustomCursor;