import React from "react";
import VideoItem from './VideoItem';

// functional component
const VideoList = (props) => {

    return (
        <div className="ui relaxed divided list"> 
            {
             
                props.videos.map((video) =>
                   <div key={video.id.videoId} className="item" 
                        onClick={() => props.onVideoSelect(video)}> <VideoItem
                    imgUrl={video.snippet.thumbnails.default.url}
                    title={video.snippet.title} /></div>)
            }
        </div>
    )
}

export default VideoList;