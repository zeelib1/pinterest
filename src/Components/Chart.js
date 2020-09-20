import React, {useState, useEffect} from 'react';
import { useFetch } from "./Hooks";
import '..//Styles/Chart.css';
import { AiFillStar } from "react-icons/ai";
import {  AiOutlineStar} from "react-icons/ai";
import { BiBookmarkPlus } from "react-icons/bi";


function Chart (){
const [ratings, setRatings] = useState({});
   
    useEffect(()=>{
       
            fetch('https://cdn.contentful.com/spaces/3jl15wjpl83d/environments/master/entries?access_token=00cu3XCQpVWs8x8LReew9HvhN2G9ktMpgDHnpN574xA&content_type=post&order=-fields.rating&limit=5')
            .then((value) => value.json())
            .then((result) => {
                console.log(result)
                result.items.map((elem) => {
              result.includes.Asset.forEach(asset => {
                if (asset.sys.id === elem.fields.image.sys.id) {
                  elem.img = asset.fields.file.url.slice(2);
                  return elem;
                }});
              })
            setRatings(result);
            })
            .catch((e) => e)
        },[])

console.log(ratings);

    return(
        
<div className="chartFlexContainer">

    
        
        {ratings.items ?
        
        ratings.items.map((elem, i) => {    
        return (
        <div className="itemFlexContainer itemEven" key={elem.sys.id}>
         
   
        <div className="titleFlexContainer">
         <div className="itemOne">
         <div>
        
            <p>{elem.fields.name}<span className="releaseYear"> ({elem.fields.year})</span></p>
              <span><AiFillStar className="starIcon"/> <span style={{color:'lightgrey'}}>{elem.fields.rating}</span></span>
              <AiOutlineStar className="starIcon"/><BiBookmarkPlus className="bookmarkIcon" style={{color:'lightgrey'}}/>
          </div>
     
        
          <img src= {`http://${elem.img}`} alt="" />
       
        </div>
      
        
      
        </div>
       
         <div className="starIconsFlex itemTwo">
          
         
          <div className="movieDetails">
          
          

            <p className="movieDetailDescription"><span style={{color:'lightgrey'}}  >Director: </span>{elem.fields.director}
            </p>
            <p className="movieDetailDescription"><span style={{color:'lightgrey'}}>Writer: </span>{elem.fields.writer}
            </p>
            <p className="movieDetailDescription"><span style={{color:'lightgrey'}}>Genre: </span>{elem.fields.genre}
            </p>
            <p className="movieDetailDescription"><span style={{color:'lightgrey'}}>Language: </span>{elem.fields.langugage}
            </p>
            <p className="movieDetailDescription"><span style={{color:'lightgrey'}}>Country: </span>{elem.fields.country}
            </p>
            <p className="movieDetailDescription"><span style={{color:'lightgrey'}}>Release date: </span>{elem.fields.releaseDate}
            </p>
        <p style={{color:"lightgrey", lineHeight:'1.5em'}}>{elem.fields.content.content[0].content[0].value}</p>

          </div>
         <hr />   
          </div>
          
       
     
      </div>
      
      )
        }) : null}
</div>
    )
}

const styles = {
 
    backgroundColor: 'red',
  
};

export default Chart;