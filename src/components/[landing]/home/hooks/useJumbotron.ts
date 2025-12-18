import { useState } from "react";
import jumbotron from "../../../../../data/jumbotron.json";

export const useJumbotron = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? jumbotron.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === jumbotron.length - 1 ? 0 : prev + 1));
  };

  const currentImage = jumbotron[index];

  return {
    handleNext,
    handlePrev,
    currentImage,
    jumbotron,
    index
  };
};
