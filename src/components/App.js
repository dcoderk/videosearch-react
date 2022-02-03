import React, { useState, useEffect } from 'react'; //{useState} hooks function
import VideoSearch from './VIdeoSearch';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import youtube from '../api/youtube';



const App = (props) => {

    
    // hooks using useState() converted from state
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSeletectedVideo] = useState(null);
    const [term, setTerm] = useState('cat videos');

    const onVideoSelect = (video) => {
        setSeletectedVideo(video);
    }


    const onSearch = async (term) => {
        const response = await youtube.get('./search', { params: { q: term } });
        setVideos(response.data.items);
        setSeletectedVideo(response.data.items[0]);
    }

    // hooks using useEffect converted from lifecycle method
   
    useEffect(() => {
        onSearch(term);
    }, [term]);

  

    return (
        <div className="ui grid container">
            <div className="row">
                <div className="column search-wrapper">
                    <VideoSearch onSearch={ (term) => setTerm(term) } />
                </div>
            </div> 
            <div className="row">
                <div className="ten wide column">
                    <VideoPlayer selectedVideo={selectedVideo} />
                </div>
                <div className="six wide column">
                    <VideoList videos={videos} 
                        onVideoSelect={onVideoSelect} />
                </div>
            </div>
        </div>
    )

    
}

export default App;