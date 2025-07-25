import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Marque = () => {
  const headings = [];

  for (let i = 1; i <= 4; i++) {
    headings.push(
      <h1 key={i}>
        Turn Your influence into a brand <span className="circle"></span>
      </h1>
    );
  }

  // useEffect(() => {
  useGSAP(() => {
    let direction = "right";
    const target = ".marque h1";
    gsap.to(target, {
      x: "-200%",
      repeat: -1,
      duration: 4,
      ease: "none",
    });
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0 && direction !== "left") {
        direction = "left";
        gsap.killTweensOf(target);
        gsap.to(target, {
          x: "-200%",
          repeat: -1,
          duration: 4,
          ease: "none",
        });
      } else if (e.deltaY < 0 && direction !== "right") {
        direction = "right";
        gsap.killTweensOf(target);
        gsap.to(target, {
          x: "0%",
          repeat: -1,
          duration: 4,
          ease: "none",
        });
      }
    });
  });
  // }, []);

  return <div className="heading marque">{headings}</div>;
};

export default Marque;
