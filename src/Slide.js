import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function Slide({ index, progress, children }) {
  const tl = useRef(
    anime.timeline({ autoplay: false, duration: 1000, easing: "linear" })
  );

  useEffect(() => {
    const animation = {
      targets: document.querySelector(`.slide:nth-of-type(${index + 1})`),
      translateX: [-1000, 0],
      loop: true,
      direction: "alternate"
    };
    tl.current.add(animation);
  }, [index]);

  useEffect(() => {
    console.log(index, progress);
    tl.current.seek(tl.current.duration * progress);
  }, [progress]);

  return <h1 className="slide">{children}</h1>;
}
