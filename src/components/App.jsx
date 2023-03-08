import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = (evt) => {
    this.setState(prevState => {
      return {
        [evt.target.name]: prevState[evt.target.name] + 1
      }
    })
  }
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    const allFeedback = this.state.good + this.state.neutral + this.state.bad;
    const percentage = Math.round(this.state.good / allFeedback * 100);
    return percentage;
  }

  render() {
    return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.countFeedback}></FeedbackOptions>
      </Section>

      {!this.state.good && !this.state.neutral && !this.state.bad ? 
        <Notification message="There is no feedback yet"></Notification>
      :
        <Section title="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
        </Section>
      }
      
      <GlobalStyle></GlobalStyle>
    </Layout>      
    );
  }
};
