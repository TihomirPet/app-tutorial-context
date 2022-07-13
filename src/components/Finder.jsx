

import Header from './header/Header';

import FeedbackList from './feedbackItem/FeedbackList';
import FeedbackStats from './feedbackstats/FeedbackStats';
import FeedbackForm from './form/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Post from './post/Post';

import {FeedbackProvider} from './context/FeedbackContext';

export default function Finder() {

 
 
  return (
    <FeedbackProvider>
      <Router>
        <Header text='APP - TITLE' />

        <div className='container-fluid'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }></Route>

            <Route path='/test' element={<AboutPage />} />
            <Route path='/post/*' element={<Post />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}
