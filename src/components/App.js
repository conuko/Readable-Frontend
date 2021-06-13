import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import HomeView from './HomeView';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return (
    <div className="App">
      <header className="App-header" />
      <HomeView />
    </div>
  );
}

export default App;
