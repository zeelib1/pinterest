import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import Chart from './Components/Chart';
import cinema from '../src/img/cinema.svg';
import { useFetch } from './Components/Hooks';

// Link to asset
// https://cdn.contentful.com/spaces/3jl15wjpl83d/environments/master/assets/72UF6pHNFstlykyUHBr1M6?access_token=00cu3XCQpVWs8x8LReew9HvhN2G9ktMpgDHnpN574xA

function App() {

  return (
    <Router>
    <div className="App">
    <Nav/>
    <hr />
    <Switch>
    <Route path="/" exact component={Home}/>
       <Route path="/profile" component={Profile}/>
       <Route path="/chart" component={Chart}/>
    </Switch>
    </div>
    </Router>
  );
}

function Home (){
  const [movies, setMovies] = useState();
  
  useEffect(() => {
    fetch('https://cdn.contentful.com/spaces/3jl15wjpl83d/environments/master/entries?access_token=00cu3XCQpVWs8x8LReew9HvhN2G9ktMpgDHnpN574xA&content_type=post')
      .then((value) => value.json())
      .then((json) => json)
      .then((result) => result.items.map((element) => {
        console.log(element.fields.image.sys.id);
        console.log(result.includes);
        
      }))
      .catch((e) => e)

 /*      movies.items.map((element) => {
          fetch(`https://cdn.contentful.com/spaces/3jl15wjpl83d/environments/master/assets/${element.fields.image.sys.id}?access_token=00cu3XCQpVWs8x8LReew9HvhN2G9ktMpgDHnpN574xA`)
            .then((value) => value.json())
            .then((json) => {
              element.imgurl = json.fields.file.url.slice(2);
            })
            .catch((e) => e)
      })  */
  },[])
    

  return(
      <div className="">
        <form className="homeForm">
       <img className="cameraIcon" src={cinema} alt="" />
         <input type="text" name="" placeholder="Search for a movie" />
         <button className="submitButton" type="submit">Submit</button>
         </form>
         <div className="gridContainer">
        {/*  {movies ? 
             movies.items.map((element) => {
               console.log(element);
              return (<div className="photoOne" key={element.sys.id}>
                <img className="grow"  
                src={`http://images.ctfassets.net/3jl15wjpl83d/wMsK4RN8ITvve0RJOGBRQ/67ce855894e42d23ec0be9ee11cc5fe3/iyTD2QnySNMPUPE3IedZQipSWfz.jpg`} 
                alt={element.fields.name} />
                </div>);}) */}
            : null} 
        </div>
      </div>
  )
}

export default App;
