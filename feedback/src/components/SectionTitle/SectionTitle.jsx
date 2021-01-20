import React from "react";
import styles from "./SectionTitle.module.css";
import PropTypes from "prop-types";

const SectionTitle = () => {
  return (
    <div className={styles.sectionTitle}>
      <h1 className={styles.title}>Please leave feedback</h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
