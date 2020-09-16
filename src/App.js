import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import Chart from './Components/Chart';
import cinema from '../src/img/cinema.svg'


export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
    fetchData();
  }, []);
  return {response, error} ;
};

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

  const [movies, setMovies] = useState(useFetch(
    'https://cdn.contentful.com/spaces/3jl15wjpl83d/environments/master/entries?access_token=00cu3XCQpVWs8x8LReew9HvhN2G9ktMpgDHnpN574xA&content_type=post', {}));

  return(
      <div className="">
      
        <form className="homeForm">
       <img className="cameraIcon" src={cinema} alt="" />
         <input type="text" name="" placeholder="Search for a movie" />
         <button className="submitButton" type="submit">Submit</button>
         </form>
         <div className="gridContainer">
         <div className="photoOne">
           <img className="grow"  src="https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg"/>
         </div>
         <div className="photoTwo">
           <img className="grow"  src="https://i.ebayimg.com/images/g/1jcAAOSwqkRcPhwS/s-l640.jpg"/>
         </div>
         <div className="photoTwo">
           <img className="grow"  src="https://fffmovieposters.com/wp-content/uploads/74934.jpg"/>
         </div>
         <div>
           <img className="grow"  src="https://images-na.ssl-images-amazon.com/images/I/91BT34MLA5L._AC_SY741_.jpg"/>
         </div>
         <div>
           <img className="grow"  src="https://i.pinimg.com/originals/ed/0b/86/ed0b862bfb7556f1ac480666eda9610c.png"/>
         </div>
         <div>
           <img className="grow"  src="https://m.media-amazon.com/images/I/71ZNaaf8LDL._AC_SS350_.jpg"/>
         </div>
         <div>
           <img className="grow"  src="https://i.pinimg.com/236x/0f/89/13/0f8913bc081d3850d94226f47f126af8.jpg"/>
         </div>
         <div>
           <img className="grow"  src="https://images-na.ssl-images-amazon.com/images/I/51zd9L-2iWL._AC_.jpg"/>
         </div>
         <div>
           <img className="grow"  src="https://i.ebayimg.com/images/g/nPUAAOSwvx1bt3yD/s-l640.jpg"/>
         </div>
         <div>
           <img className="grow"  src="https://i.pinimg.com/originals/45/1f/ea/451fea66f7255f4842f87a3588e2fb85.jpg"/>
         </div>
        </div>
      </div>
  )
}

export default App;
