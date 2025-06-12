import React, { useState } from "react";
import "./Final.css";

function Final() {
  const [color, setColor] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    setColor(e.target.value);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <input
        type="text" value={input} onChange={handleChange} style={{ marginRight: "1rem", padding: "0.5rem" }}
      />
      <div
        style={{
          display: "inline-block",
          width: "50px",
          height: "50px",
          background: "purple",
          border: "1px solid #ccc",
          verticalAlign: "middle",
        }}
      />
    </div>
  );
}

export default Final;