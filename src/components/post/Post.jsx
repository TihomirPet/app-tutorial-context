import React from 'react';
import { Navigate, useNavigate, Route, Routes } from 'react-router-dom';
export default function Post() {
  const status = 200;
  const navigate = useNavigate();
  const onClick = () => {
    console.log('test');
    navigate('/about');
  };

  if (status === 404) {
    return <Navigate to='/notfound' />;
  }
  return (
    <div>
      <h1> post</h1>
      <button onClick={onClick}>Navigate</button>
      <Routes>
        <Route path='/show' element={<h1>Test Show</h1>} />
      </Routes>
    </div>
  );
}
