import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = () => {
  return (
    <div className={styles.buttons}>
      <button className={styles.button}>Good</button>
      <button className={styles.button}>Neutral</button>
      <button className={styles.button}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;
