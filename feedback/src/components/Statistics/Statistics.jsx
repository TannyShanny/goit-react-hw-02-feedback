import React from "react";
import styles from "./Statistics.module.css";

const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {props.total}</p>
      <p>Positive feedback: {props.positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
