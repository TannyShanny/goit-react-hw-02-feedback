import React, { Component } from "react";
import "./App.css";
import Statistics from "./components/Statistics/Statistics.jsx";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Notification from "./components/Notification/Notification.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  onLeaveFeedback = (e) => {
    const name = e.target.name;
    this.setState((previousCounter) => ({ [name]: previousCounter[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const objKey = Object.keys(this.state);

    return (
      <div>
        <FeedbackOptions
          options={objKey}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </div>
    );
  }
}

export default App;
