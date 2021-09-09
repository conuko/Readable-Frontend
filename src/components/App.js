import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import HomeView from './HomeView';
import Navbar from './Navbar';
import Footer from './Footer';
import PostDetailView from './PostDetailView';
import CategoryView from './CategoryView';
import CreatePost from './CreatePost';
import EditPost from './EditPost';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route path="/" exact component={HomeView} />
        <Route path="/post/:id" exact component={PostDetailView} />
        <Route path="/category/:category" exact component={CategoryView} />
        <Route exact path="/add" component={CreatePost} />
        <Route exact path="/post/edit/:id" component={EditPost} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
