'use client';

import ProgressBar from "@ramonak/react-progress-bar";
import { useScroll } from "@/app/_hooks/useScroll";

function ScrollProgressBar() {
  const scrollY = useScroll();

  return (
    <ProgressBar
      maxCompleted={window.innerHeight}
      completed={scrollY}
      className="wrapper"
      barContainerClassName="container"
      isLabelVisible={false}
      bgColor="#000000"
      height="4px"
    />
  );
}

export default ScrollProgressBar;