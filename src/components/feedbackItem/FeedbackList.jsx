import React from 'react';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import LoadingSpinner from '../shared/LoadingSpinner'

export default function FeedbackList() {

  const {feedback,isLoading} = useContext(FeedbackContext);

  if (!isLoading &&(!feedback || feedback.length === 0)) {
    return <p>No feedback</p>;
  }
// console.log(feedback);







return isLoading? <LoadingSpinner/>:(  <div className="container">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>)

}
