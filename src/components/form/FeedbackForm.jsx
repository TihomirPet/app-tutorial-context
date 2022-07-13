import React, { useState, useContext, useEffect } from 'react';
import Card from '../shared/Card';
import Button from '../buttons/Button';
import Ratingselect from '../rating/Ratingselect';
import FeedbackContext from '../context/FeedbackContext';

//pass addFeedback from Finder
export default function Form() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(' ');
  const [rating, setRating] = useState(9);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  // form validation
  const handleTextChange = (e) => {
    if (text === '') {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };
  // Submit function for form
  const handleSubmit = (e) => {
    e.preventDefault();
    //new text check
    if (text.trim().length > 10) {
      //create object {text,rating}
      const newFeedback = {
        text,
        rating,
      };
console.log(newFeedback);
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        // call function addFeedback passed from Finfer
        addFeedback(newFeedback);
      }

      setText('');
    }
  };


  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>rate service </h2>
        <Ratingselect select={(rating) => setRating(rating)} />
        <div className='input-group mb-3'>
          <input
            className='form-control'
            value={text}
            onChange={handleTextChange}
            type='text'
          />

          <Button
            // onClick={() => handleTextChange(' ')}
            type='submit'
            isDisabled={btnDisabled}>
            submit
          </Button>
        </div>
        {message && <div>{message}</div>}
      </form>
    </Card>
  );
}
