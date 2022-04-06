import React from "react";

const Video = ({video}) => {
    return (
        <>
            <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h2>{video.title}</h2>
            <small>{video.views} Views || Uploaded {video.createdAt}</small>
        </>
    )
}

export default Video