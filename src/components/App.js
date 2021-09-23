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
import SignInView from './SignInView';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <div className="App">
        <Route exact path="/" component={HomeView} />
        <Route exact path="/signin" component={SignInView} />
        <Route exact path="/post/:id" component={PostDetailView} />
        <Route exact path="/category/:category" component={CategoryView} />
        <Route exact path="/add" component={CreatePost} />
        <Route exact path="/post/edit/:id" component={EditPost} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
