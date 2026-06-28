"use client";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

function Typer({ words }) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <div className="flex items-center justify-center lg:mb-15 lg:text-2xl mb-10 text-red-700">
      {" "}
      <Typewriter
        words={[words]}
        //  loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={70}
        delaySpeed={3000}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      />
    </div>
  );
}

export default Typer;
