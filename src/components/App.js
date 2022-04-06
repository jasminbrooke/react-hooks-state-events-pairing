import React from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Votes from "./Votes.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video}/>
      <Votes video={video} />
      <Comments comments={video.comments}/>
    </div>
    
  );
}

export default App;
