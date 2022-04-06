import React, { useState } from "react";

const Votes = ({video}) => {
    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)
    
    return (
        <div>
            <button onClick={() => setUpvotes(upvotes + 1)}>{upvotes}👍</button>
            <button onClick={() => setDownvotes(downvotes + 1)}>{downvotes}👎</button>
        </div>
    )
}

export default Votes