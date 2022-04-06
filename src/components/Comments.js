import React, { useState } from "react";

const Comments = ({comments}) => {
    const [isHidden, setIsHidden] = useState(false)
    const commentList = comments.map((comment) => {
        if(!isHidden){
            return (
                <div key={comment.id}>
                    <h4>{comment.user}</h4> 
                    <small>{comment.comment}</small>
                </div>
            )
        }
    });
    return (
        <>
        <button onClick={() => setIsHidden(!isHidden)}> {isHidden ? 'Show' : 'Hide'} Comments </button>
        <div>
            {commentList}
        </div>
        </>
    );
}

export default Comments