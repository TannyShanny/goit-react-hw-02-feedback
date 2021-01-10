import React from "react";
import Section from "../Section.jsx";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </Section>
  );
};

export default FeedbackOptions;
