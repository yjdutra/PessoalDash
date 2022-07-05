import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windo;
  return { width, height };
}

export default function BackgroundImage() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);
      setHeight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Image
        src={"https://images2.alphacoders.com/238/238870.jpg"}
        width={width}
        height={height}
      />
    );
  }
}
