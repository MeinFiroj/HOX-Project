import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  // document.addEventListener("load", () => {
  //   requestAnimationFrame(() => {
  //     startHeadingAnimation()
  //   });
  // });

  const startHeadingAnimation = () => {
    gsap
      .timeline()
      .from(".headings h2", {
        x: 200,
        opacity: 0,
      })
      .from(".headings h1", {
        x: -100,
        opacity: 0,
        delay: 0.4,
      })
      .from(".hero p", {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      })
      .from(".headings .big", {
        rotateZ: 20,
        scale: 1.1,
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(".headings .big", {
        rotateZ: -20,
        scale: 1.1,
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(".headings .big", {
        rotateZ: 15,
        scale: 1.1,
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(".headings .big", {
        rotateZ: -15,
        scale: 1.1,
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(".headings .big", {
        rotateZ: 0,
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      });
  };

  setTimeout(startHeadingAnimation, 1000);
  return (
    <section className="hero">
      <div className="headings">
        <h1>
          The Next <br /> <span className="big">Big</span> Thing
        </h1>
        <h2>House of X</h2>
      </div>
      <p>
        HOUSE OF X provides end-to-end tools to launch, build and scale
        creator-ledD2C brands. Our aim is to democratise brand creation, by
        taking it from the hands of a few and giving it to the hands of
        everyone.
      </p>
    </section>
  );
};

export default Hero;
