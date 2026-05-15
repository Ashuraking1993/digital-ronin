import { useMemo } from "react";

function Sakura() {

  const petals = useMemo(() => {

    return Array.from({ length: 25 }).map(() => ({

      left: `${Math.random() * 100}%`,

      duration:
        `${8 + Math.random() * 8}s`,

      delay:
        `${Math.random() * 5}s`,

      opacity:
        Math.random()

    }));

  }, []);

  return (

    <div className="sakura-container">

      {petals.map((petal, index) => (

        <span
          key={index}
          className="petal"

          style={{

            left: petal.left,

            animationDuration:
              petal.duration,

            animationDelay:
              petal.delay,

            opacity:
              petal.opacity

          }}
        />

      ))}

    </div>

  );

}

export default Sakura;