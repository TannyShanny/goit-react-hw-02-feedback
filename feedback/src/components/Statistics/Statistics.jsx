import React from "react";
import styles from "./Statistics.module.css";
import Section from "../Section";
import PropTypes from "prop-types";

const Statistics = (props) => {
  return (
    <Section>
      <h2 className={styles.title}>Statistics</h2>
      <p className={styles.statisticsItem}>Good: {props.good}</p>
      <p className={styles.statisticsItem}>Neutral: {props.neutral}</p>
      <p className={styles.statisticsItem}>Bad: {props.bad}</p>
      <p className={styles.statisticsItem}>Total: {props.total}</p>
      <p className={styles.statisticsItem}>
        Positive feedback: {props.positivePercentage}%
      </p>
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentege: PropTypes.number.isRequired,
};

export default Statistics;
