import React, { useState, useEffect } from "react";

const CircleProgressBar = ({ progress, strokeWidth, radius, color }) => {
  const [circumference, setCircumference] = useState(0);

  useEffect(() => {
    setCircumference(2 * Math.PI * radius);
  }, [radius]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      <circle
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius - strokeWidth / 2}
        cx={radius}
        cy={radius}
        style={{
          strokeDasharray: `${circumference} ${circumference}`,
          strokeDashoffset: offset,
          transition: "stroke-dashoffset 0.5s ease 0s",
        }}
      />
    </svg>
  );
};

export default CircleProgressBar;