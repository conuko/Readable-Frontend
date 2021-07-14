import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import HomeView from './HomeView';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={HomeView} />
      </div>
    </Router>

  );
}

export default App;
