import React from "react";
import './VideoItem.css';

const VideoItem = (props) => {
    return (
        <div className="video-item ">
           <img src={props.imgUrl} className="ui small image" />
           <div className="content">                
                <div className="header description">
                    {props.title}
                </div>
           </div>
        </div>
    )
}

export default VideoItem;