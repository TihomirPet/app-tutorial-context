import React from 'react';

import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  //calculate ratings
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  const showAverige = isNaN(average) ? 0 : average;

  average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div>
      <div className='d-flex justify-content-between mt-5'>
        <h4>reviews: {feedback.length} </h4>
        <h4>{` Average rating: ${showAverige}`}</h4>
      </div>
    </div>
  );
}

