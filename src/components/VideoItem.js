import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const { title, thumbnails } = video.snippet;

  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        className="ui image"
        src={thumbnails.medium.url}
        alt={`${title} thumbnail`}
      />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
