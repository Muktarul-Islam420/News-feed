import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Post from './components/Post/Post';
import PostDetail from './components/PostDetail/PostDetail';
import Comment from './components/Comment/Comment';
import CommentDetail from './components/CommentDetail/CommentDetail';
import Appbar from './components/Appbar/Appbar';




function App() {
 

  return (
   
    <div className="App">
       <Appbar></Appbar>
        <Router>
          <Switch>
            <Route path="/home">
            <Home/>
            </Route>
            <Route exact path="/post/:Id">
              <PostDetail/>
            </Route>
            <Route exact path="/comment/:Id">
              <Comment/>
            </Route>
            <Route exact path="/comment/:Id">
              <CommentDetail/>
            </Route>
            <Route exact path="/">
            <Home/>
            </Route>
            <Route exact path="/post">
                <Post/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Router>  
    </div>
  );
}

export default App;
