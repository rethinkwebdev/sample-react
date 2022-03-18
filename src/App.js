import React from "react";
import ZoomSlider from "react-instagram-zoom-slider";

export default function App() {
  const slides = [
    <img
      src="https://lh3.googleusercontent.com/ZKekQLpv7E1dXmoWkTyn5jYYxUN1t9VVcRZ0TRQrQJzihmih2ca-74QNCo-CQgvZIc4zGQSnV4FmpXBes3ucRzd0H-X8ur3oLCA0QQ=w600"
      alt="SAAC 1"
    />,
    <img
      src="https://lh3.googleusercontent.com/ntcPXPtKo_43bhGxefY_fCspZ4s422cUqYmxiAP8iO_NVcKJLtU8k_pBeUFgN0A6-jgCFR1IhF0hS9C9J-Illkb9y8tIknpt0yAiHA=w600"
      alt="SAC 2"
    />,
  ];

  return <ZoomSlider slides={slides} />;
}
