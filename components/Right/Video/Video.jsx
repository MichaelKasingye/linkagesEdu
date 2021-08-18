import React from 'react'
import videoCss from './video.module.css'
function Video({src, description}) {
    return (
        <div className = {videoCss.video}>
           <iframe  src = {src} title="YouTube video player" 
           frameBorder="0" 
        //    allow="accelerometer; autoplay; 
        //    clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowFullScreen></iframe>
           <p>{description}</p>

        </div>
    )
}

export default Video
