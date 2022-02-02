import React, { useState, useRef } from "react"; // {useState} a hook function
import { useEffect } from "react/cjs/react.development";


//functional components + hooks
const VideoSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('cat videos'); // hooks using useState()

    const inputEl = useRef(null);


    const onSubmit = async (evt) => {
        evt.preventDefault();
        props.onSearch(searchTerm);
    }

    useEffect(() => {
        inputEl.current.focus();
    }, []);

    return (
        <div>
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <input ref={inputEl} value={searchTerm} type='text' placeholder="Search videos..."
                    onChange={ (e) => setSearchTerm(e.target.value) } />
                </div>
            </form>
            
        </div>
    )
}



export default VideoSearch;