import React from "react";


const VideoPlayer = (props) => {

   console.log(props);

   if (!props.selectedVideo) {
       return <div>Loading...</div>
   }

    const videoId = props.selectedVideo.id.videoId;

    const videoURL = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="This is a unique title" src={videoURL}></iframe>
            </div>
            <div>
                <div className="ui medium header video-title">
                    {props.selectedVideo.snippet.title}
                </div>
                <p>{props.selectedVideo.snippet.description}</p>
            </div>
        </div>
       
    )
}

export default VideoPlayer;