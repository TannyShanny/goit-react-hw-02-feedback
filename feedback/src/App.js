import "./App.css";
import SectionTitle from "./components/SectionTitle/SectionTitle.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";

function App() {
  return (
    <div className="App">
      <SectionTitle title="" />
      {/* <SectionTitle /> */}

      {/* <FeedbackOptions options={} onLeaveFeedback={} /> */}
      {/* <FeedbackOptions /> */}

      <Statistics
        good={1}
        neutral={2}
        bad={3}
        total={4}
        positivePercentage={10}
      />
      {/* <Statistics /> */}
    </div>
  );
}

export default App;
