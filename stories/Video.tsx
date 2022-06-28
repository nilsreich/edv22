import React from "react";

interface VideoProps {
    source?: string;
    showControls?: boolean;
}

export const Video = ({source, showControls}:VideoProps) => {
    return (
        <video src={source} controls={showControls}/>
    )
}
