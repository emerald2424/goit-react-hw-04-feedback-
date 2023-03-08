import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { useState } from 'react';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = (e) => {
    switch (e.target.name) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      default: 
        return;
    }
  }
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const allFeedback = good + neutral + bad;
    const percentage = Math.round(good / allFeedback * 100);
    return percentage;
  }

  
    return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={countFeedback}></FeedbackOptions>
      </Section>

      {!good && !neutral && !bad ? 
        <Notification message="There is no feedback yet"></Notification>
      :
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>
        </Section>
      }
      
      <GlobalStyle></GlobalStyle>
    </Layout>      
    );
  };
