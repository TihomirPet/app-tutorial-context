import Card from '../shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({ item}) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  console.log(item);
  return (
    <Card>
      <div className='card-num-display border border-danger text-center '>
        {item.rating}
      </div>
      <div className='card-text-display d-flex'>{item.text}</div>
      <div className='container-fluid d-flex'>
        <button
          className='cloce btn btn-warning'
          onClick={() => deleteFeedback(item.id)}>
          Delete
        </button>
        <button
          className='cloce btn btn-warning'
          onClick={() => editFeedback(item)}>
          Update
        </button>
      </div>
    </Card>
  );
}
