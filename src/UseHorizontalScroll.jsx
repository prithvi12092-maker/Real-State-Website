import { useRef, useEffect } from "react";

function UseHorizontalScroll() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleMouseMove = (e) => {
      const rect = slider.getBoundingClientRect();

      const mouseX = e.clientX - rect.left;
      const percentage = Math.max(
        0,
        Math.min(1, mouseX / rect.width)
      );

      const maxScroll =
        slider.scrollWidth - slider.clientWidth;

      slider.scrollLeft = percentage * maxScroll;
    };

    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return sliderRef;
}

export default UseHorizontalScroll;