import { useState } from "react";
import { Section } from "./components/Section/Section";
import { Statistics } from "./components/Statistics/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";

export type FeedbackType = "good" | "bad" | "neutral"

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type: FeedbackType) => {
    if (type === "good") setGood((prev) => prev + 1);
    if (type === "neutral") setNeutral((prev) => prev + 1);
    if (type === "bad") setBad((prev) => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options: FeedbackType[] = ["good", "neutral", "bad"];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions option={options} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={positivePercentage}
        />
      </Section>
    </div>
  );
};

export default App;
