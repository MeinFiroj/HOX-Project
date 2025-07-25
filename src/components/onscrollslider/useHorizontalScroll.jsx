import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHorizontalScroll = () => {
  useEffect(() => {
    const slider = document.querySelector(".slider");
    const sliderCont = document.querySelector(".slider-cont");

    if (!slider || !sliderCont) return;

    let anim;

    const initScrollAnimation = () => {
      const totalWidth = slider.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      if (scrollDistance <= 0) return;

      gsap.set(slider, { x: 0 });

      anim = gsap.to(slider, {
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
      // Delay to wait for DOM and images to load
      setTimeout(() => {
        initScrollAnimation();
        ScrollTrigger.refresh();
      }, 100);
    }

    window.addEventListener("resize", ScrollTrigger.refresh);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      anim?.kill();
      window.removeEventListener("resize", ScrollTrigger.refresh);
    };
  }, []);
};

export default useHorizontalScroll;
