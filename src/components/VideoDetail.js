import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const { title, channelTitle, description } = video.snippet;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <h5 className="ui sub header">Channel: {channelTitle}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
