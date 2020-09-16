import React, {useState, useEffect} from 'react';
import '../Styles/Profile.css'


function Profile (){
    return(
        <div className="profileContainer">
           <img src="https://www.phideltatheta.org/wp-content/uploads/2013/08/Roger_Ebert.jpg" alt="" />
           <form>
                <label for="dateJoined">Date joined: </label>
                <input type="date" id="dateJoined" name="dateJoined"/>

                <label for="appt"></label>
                <input type="time" id="appt" name="appt" min="09:00" max="18:00" required></input>
            </form> 
            <p>Favorite films</p>
            <div className="profilePost">
                <p>Post</p>
                <h4>Belle de Jour</h4>
            </div>
            <div className="profilePost">
                <p>Post</p>
                <h4>In the Mood for Love</h4>
            </div>
        </div>
    )
}

export default Profile;


