import React from "react";
import styles from "./Notification.module.css";

const Notification = (props) => {
  return (
    <div className={styles.message}>
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
