import React, { useEffect, useState } from "react";

const Randomcolor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000");

  useEffect(() => {
    if (type === "hex") {
      handleRandomColor();
    } else {
      handleRandomRGBColor();
    }
  }, [type]);
  const getRandomColor = (length) => {
    // console.log(length);
    return Math.floor(Math.random() * length);
  };
  const handleRandomRGBColor = () => {
    const r = getRandomColor(255);
    const g = getRandomColor(255);
    const b = getRandomColor(255);

    let rgbcolor = `rgb(${r},${g},${b})`;
    setColor(rgbcolor);
  };
  const handleRandomColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      //   console.log(i);
      //console.log(getRandomColor(hex.length));
      hexColor += hex[getRandomColor(hex.length)];
    }
    // console.log(hexColor);
    setColor(hexColor);
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setType("hex")}>Create Hex color</button>
      <button onClick={() => setType("rgb")}>Create RGB color</button>
      <button
        onClick={() =>
          type === "hex" ? handleRandomColor() : handleRandomRGBColor()
        }
      >
        Generate Random Color
      </button>
      <h3>{type}</h3>
      <h3>{color}</h3>
    </div>
  );
};

export default Randomcolor;
