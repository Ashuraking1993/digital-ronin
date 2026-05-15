function MahoganyLeaves() {

  const leaves = Array.from({ length: 25 });

  return (

    <div className="mahogany-container">

      {leaves.map((_, index) => (

        <span
          key={index}
          className="mahogany-leaf"

          style={{

            left: `${Math.random() * 100}%`,

            animationDuration:
              `${12 + Math.random() * 10}s`,

            animationDelay:
              `${Math.random() * 5}s`,

            opacity:
              0.4 + Math.random() * 0.6,

            transform:
              `scale(${0.6 + Math.random()})`

          }}
        />

      ))}

    </div>

  );

}

export default MahoganyLeaves;