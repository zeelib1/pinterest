import React, {useState, useEffect} from 'react';
import { useFetch } from "./Hooks";
import '..//Styles/Chart.css';
import { AiFillStar } from "react-icons/ai";
import {  AiOutlineStar} from "react-icons/ai";
import { BiBookmarkPlus } from "react-icons/bi";


function Chart (){
const [ratings, setRatings] = useState({});
   
    useEffect(()=>{
       
            fetch('https://cdn.contentful.com/spaces/3jl15wjpl83d/environments/master/entries?access_token=00cu3XCQpVWs8x8LReew9HvhN2G9ktMpgDHnpN574xA&content_type=post')
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
    <h1>Top 5 as Rated by Users</h1>
   
    {/* //Movie 1 */}
    <div className="columnTitleFlex">
        <h4>Rank</h4>
        <h4>Title</h4>
        <h4>Your rating</h4>
        

    </div>
        
        {ratings.items ?
        
        ratings.items.map((elem, i) => {    
        return (
        <div className="itemFlexContainer itemEven" key={elem.sys.id}>
   
        <div className="titleFlexContainer">
         <div className="itemOne">
        <span>{i+1}.</span>
          <img src= {`http://${elem.img}`} alt="" />
       
        </div>
      
        
      
        </div>
       
         <div className="starIconsFlex itemTwo">
         <p>{elem.fields.name}<span className="releaseYear"> ({elem.fields.year})</span></p>
              <span><AiFillStar className="starIcon"/> {elem.fields.rating}</span>
              <AiOutlineStar className="starIcon"/><BiBookmarkPlus className="bookmarkIcon"/>
          </div>
          
       
         
      </div>
      )
        }) : null}
</div>
    )
}

export default Chart;