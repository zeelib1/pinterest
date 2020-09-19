import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import Chart from './Components/Chart';
import cinema from '../src/img/cinema.svg';

function App() {

  return (
    <Router>
    <div className="App">
    <Nav/>
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
      .then((result) => {result.items.map((element) => {
        result.includes.Asset.forEach(asset => {
          if (asset.sys.id === element.fields.image.sys.id) {
            element.imgUrl = asset.fields.file.url.slice(2);
            return element;
          }});
        })
      setMovies(result);
      })
      .catch((e) => e)
  },[])

  const filterMovies = () => {
    const input = document.querySelector('.inputField').value;
    fetch(`https://cdn.contentful.com/spaces/3jl15wjpl83d/environments/master/entries?access_token=00cu3XCQpVWs8x8LReew9HvhN2G9ktMpgDHnpN574xA&content_type=post&query=${input}`)
      .then((value) => value.json())
      .then((result) => {result.items.map((element) => {
        result.includes.Asset.forEach(asset => {
          if (asset.sys.id === element.fields.image.sys.id) {
            element.imgUrl = asset.fields.file.url.slice(2);
            return element;
          }});
        })
      setMovies(result);
      })
      .catch((e) => e)
  }
  
  const resetMovies = () => {
    document.querySelector('.inputField').value = "";
    filterMovies();
  }

  window.addEventListener('scroll', e => {
    const target = document.querySelectorAll('.scroll');

    for (let i = 0; i < target.length; i++) {
      let posY = window.pageYOffset * target[i].dataset.ratey;
      let posX = window.pageYOffset * target[i].dataset.ratex;
      target[i].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`
    }
    
  })
 

//   const movies = useFetch(
//     'https://cdn.contentful.com/spaces/3jl15wjpl83d/environments/master/entries?access_token=00cu3XCQpVWs8x8LReew9HvhN2G9ktMpgDHnpN574xA&content_type=post', {});
//  console.log(movies)

  return(
      <div className="bodyHome">
         <section className="cinemaIntro"> 
          <p className='scroll special font-effect-anaglyph' data-rateX='1' data-rateY='0.7'>Cinemagram</p>
           <img className='scroll scrollImg' data-rateY='0' data-rateX='0' src='https://image.tmdb.org/t/p/original/rnN9yJfwso6JA64wIPqK1m6K6e1.jpg' style={{}}/>
           <img className='scroll scrollImg' data-rateY='-1' data-rateX='0' src={require('./img/seating.png')} style={{top: '650px', zIndex: '11'}}/>
         </section>
         <section className='gap scroll' data-rateY='-0.3' data-rateX='0'></section>
         <section className='library'>
         <form className="homeForm">
            <img className="cameraIcon" src={cinema} alt="" />
            <input type="text" name="" placeholder="Search for a movie" className="inputField" onChange={filterMovies}/>
            <button className="submitButton" type="button" onClick={resetMovies}>Reset</button>
         </form>
         <div className="gridContainer">
         {movies ? 
             movies.items.map((element) => {
              return (<div className="photoOne" key={element.sys.id}>
                <img className="grow"  
                src={`http://${element.imgUrl}`} 
                alt={element.fields.name} />
                </div>)
                ;}) 
            : null} 
        </div>
        </section>
      </div>
  )
}

export default App;
