import React, {useState, useEffect} from 'react';
import { useFetch } from "../App.js";
import '..//Styles/Chart.css';
import { AiFillStar } from "react-icons/ai";
import {  AiOutlineStar} from "react-icons/ai";
import { BiBookmarkPlus } from "react-icons/bi";


function Chart (){

    useEffect(()=>{
        //axios fetch
      })


    return(
        
<div className="chartFlexContainer">
    <h1>Top 5 as Rated by Users</h1>
   
    {/* //Movie 1 */}
    <div className="columnTitleFlex">
        <h4>Rank</h4>
        <h4>Title</h4>
        <h4>Your rating</h4>
        

    </div>
    <div className="itemFlexContainer itemEven">
      <div className="titleFlexContainer">
          <span>1.</span>
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlIHtgWeQQsiZaY5iw_A5FTDeKr7bNFWo1W_zObm0h_ti2Yk0V" alt="" />
        <p>Casablanca<span className="releaseYear"> (1975)</span></p>
      </div>
               
        <div className="starIconsFlex">
            <span><AiFillStar className="starIcon"/> 8.9</span>
            <AiOutlineStar className="starIcon"/><BiBookmarkPlus className="bookmarkIcon"/>
        </div>
    </div>

       {/* //Movie 2 */}    

    <div className="itemFlexContainer itemOdd">
    <div className="titleFlexContainer">
        <span>2.</span>
        <img src="https://i.pinimg.com/originals/bc/fc/64/bcfc64030939e51bc367902c65f5c302.jpg" alt="" />
        <p>Belle de Jour<span className="releaseYear"> (1967)</span></p>
    </div>
               
    <div className="starIconsFlex">
        <span><AiFillStar className="starIcon"/> 8.8</span>
        <AiOutlineStar className="starIcon"/><BiBookmarkPlus className="bookmarkIcon"/>
    </div>
    </div>

    {/* //Movie 3 */}

    <div className="itemFlexContainer itemEven">
        <div className="titleFlexContainer">
            <span>3.</span>
            <img src="https://deepfocusreview.com/wp-content/uploads/2016/12/metropolis.jpg" alt="" />
            <p>Metropolis<span className="releaseYear"> (1927)</span></p>
    </div>
               
    <div className="starIconsFlex">
        <span><AiFillStar className="starIcon"/> 8.3</span>
        <AiOutlineStar className="starIcon"/><BiBookmarkPlus className="bookmarkIcon"/>
    </div>
    </div>
            {/* //Movie 4 */}

    <div className="itemFlexContainer itemOdd">
        <div className="titleFlexContainer">
            <span>4.</span>
            <img src="https://www.postertreasures.com/images/product_images/popup_images/bennysvideo.jpg" alt="" />
            <p>Benny's Video<span className="releaseYear"> (1992)</span></p>
    </div>
               
    <div className="starIconsFlex">
        <span><AiFillStar className="starIcon"/> 9.9</span>
        <AiOutlineStar className="starIcon"/><BiBookmarkPlus className="bookmarkIcon"/>
    </div>
    </div>
            {/* //Movie 5*/}

    <div className="itemFlexContainer itemEven">
        <div className="titleFlexContainer">
        <span>5.</span>
            <img src="https://assets.mubicdn.net/images/notebook/post_images/599/images-w1400.jpg?1277427981" alt="" />
            <p>Dogtooth<span className="releaseYear"> (2009)</span></p>
    </div>
               
    <div className="starIconsFlex">
        <span><AiFillStar className="starIcon"/> 7.9</span>
        <AiOutlineStar className="starIcon"/><BiBookmarkPlus className="bookmarkIcon"/>
    </div>
    </div>

 
          
 </div>
    )
}

export default Chart;