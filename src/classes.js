import React from "react";
import "./classes.css";
function Classes() {
  return (
    <div className="page">
      <h2>Explore Our Classes</h2>
      <p style={{ fontSize: '1.5rem',}}>
        We offer a wide range of classes including:
      </p>
      <ul style={{ fontSize: '1.5rem',}}>
        <li>🏋️ Strength & Weight Training</li>
        <li>🔥 High Intensity Interval Training (HIIT)</li>
        <li>🧘 Yoga & Meditation</li>
        <li>💪 Functional Fitness</li>
        <li>🥊 Boxing & Conditioning</li>
      </ul>
      <p style={{ fontSize: '1.5rem',}} >
        Our certified trainers guide you through every session, ensuring safety and performance.
        Classes are available throughout the week — morning, afternoon, and evening slots.
      </p>
    </div>
  );
}

export default Classes;