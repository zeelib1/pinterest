import React from 'react';
import {useFetch}  from './Hooks';
import '../Styles/Profile.css'
import { AiFillStar } from "react-icons/ai";



function Profile (){
    const users = useFetch('https://cdn.contentful.com/spaces/3jl15wjpl83d/environments/master/entries?access_token=00cu3XCQpVWs8x8LReew9HvhN2G9ktMpgDHnpN574xA&content_type=user',{})

    return(
        <div className="profileContainer">
            {users.response ?  
            <div>  
                <h2>User</h2>
                <div className="profileDataTitle">
                   
                        <img src="https://www.phideltatheta.org/wp-content/uploads/2013/08/Roger_Ebert.jpg" alt="" />
                   
               
                    <h1>{users.response.includes.Asset[1].fields.title}</h1>
                      
                       
     
                
                </div> 

            <p className="dateJoined">Date joined: {users.response.items[0].fields.joined}</p>
          
          
            <p className="favoriteMoviesParagraph">Favorite movies</p>
            <div className="profilePost">
                <div className="movieTitleFlex">
                <h4>{users.response.includes.Entry[0].fields.name}</h4>
                <div>
               
                <p>Rating:  < AiFillStar className="starIcon"/> { users.response.includes.Entry[0].fields.rating}</p>
                    </div> 
              
                </div>
            
            <p>{users.response.includes.Entry[0].fields.content.content[0].content[0].value}</p>
               
            </div>
            <div className="profilePost">
                <div className="movieTitleFlex">
                <h4>{users.response.includes.Entry[1].fields.name}</h4>
                <div>
               
                <p>Rating:  < AiFillStar className="starIcon"/> { users.response.includes.Entry[1].fields.rating}</p>
                    </div> 
              
                </div>
            
            <p>{users.response.includes.Entry[1].fields.content.content[0].content[0].value}</p>
               
            </div>

            <div className="profilePost">
                <div className="movieTitleFlex">
                <h4>{users.response.includes.Entry[2].fields.name}</h4>
                <div>
               
                <p>Rating:  < AiFillStar className="starIcon"/> { users.response.includes.Entry[2].fields.rating}</p>
                    </div> 
              
                </div>
            
            <p>{users.response.includes.Entry[2].fields.content.content[0].content[0].value}</p>
               
            </div>
            <div className="profilePost">
                <div className="movieTitleFlex">
                <h4>{users.response.includes.Entry[3].fields.name}</h4>
                <div>
               
                <p>Rating:  < AiFillStar className="starIcon"/> { users.response.includes.Entry[3].fields.rating}</p>
                    </div> 
              
                </div>
            
            <p>{users.response.includes.Entry[3].fields.content.content[0].content[0].value}</p>
               
            </div>
         
            
            </div>

            
             :null}
        
        </div>
    )
}

export default Profile;


