import PropTypes, { string } from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => (options.map(option => (<button type='button' className={css.button} name={option} onClick={onLeaveFeedback} key={option}>{option}</button>)
    
))
    
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
