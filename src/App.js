import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Post from './Components/Post';
import Chart from './Components/Chart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
    <Route path="/" exact component={Home}/>
       <Route path="/post" component={Post}/>
       <Route path="/chart" component={Chart}/>
    </Switch>

    

        
    </div>
    </Router>
  );
}

function Home (){
  return(
      <div className="">
         <input type="" name="" value="" />
         <button type="submit">Submit</button>
      </div>
  )
}

export default App;
