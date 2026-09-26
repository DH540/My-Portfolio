import { useRef, useEffect } from "react";

export function useShrinkToFit({ maxFontSize = 24, minFontSize = 12 } = {}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    function fitText() {
      let low = minFontSize;
      let high = maxFontSize;
      let best = minFontSize;

      // Binary search for the largest font size that fits
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        text.style.fontSize = `${mid}px`;

        const fitsWidth = text.scrollWidth <= container.clientWidth;
        const fitsHeight = text.scrollHeight <= container.clientHeight;

        if (fitsWidth && fitsHeight) {
          best = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      text.style.fontSize = `${best}px`;
    }

    fitText();
    window.addEventListener("resize", fitText);
    return () => window.removeEventListener("resize", fitText);
  }, [maxFontSize, minFontSize]);

  return { containerRef, textRef };
}