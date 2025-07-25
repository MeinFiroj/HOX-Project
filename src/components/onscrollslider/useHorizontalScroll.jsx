import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHorizontalScroll = () => {
  useEffect(() => {
    const slider = document.querySelector(".slider");
    const sliderCont = document.querySelector(".slider-cont");

    const initScrollAnimation = () => {
      const totalWidth = slider.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      gsap.set(slider, { x: 0 });

      gsap.to(slider, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sliderCont,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    };

    if (window.innerWidth > 766) {
      initScrollAnimation();
      ScrollTrigger.refresh();
    }

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export default useHorizontalScroll;
