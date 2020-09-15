import React, {useState, useEffect} from 'react';
import '../Styles/Post.css'

function Post ({post}){
    return(
        <div className="postFlexContainer">
           <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80" width="350" height="350" alt="" />
        <div className="commentBox">
            <h1>Comment</h1>
            <p>Casablanca is a film about the personal tragedy of occupation and war.
                 It speaks to the oppression of the one side - and the heroism and
                 self-deprecation of the other. From opportunists, to isolationists
                  - from patriots to disenchanted lovers - the film has everything
                   a man or woman would enjoy. Bravery, courage, intrigue, romance,
                    beauty and love. Leading actors to please any appetite.
                     Watching this film is to step back to a world that doesn't exist
                      - yet to know it. It is to experience lives that have never been
                       lived - but are "real to you." It is to know pain and joy,
                        pride and pity for characters that are a fiction - yet are so
                        real that you can't help but get lost in their story.</p>
        </div>
        </div>
    )
}

export default Post;


