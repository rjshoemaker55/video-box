import React from 'react';

const Result = (props) => {
  const { videoId, title, thumbnail, channelTitle, openVideo } = props;

  return (
    <div
      className='result-wrapper'
      key={videoId}
      onClick={() => openVideo(videoId)}
    >
      <h3>{videoId}</h3>
      <h3>{title}</h3>
      <img src={thumbnail.url} alt={`Thumbnail for ${title}.`} />
      <p>{channelTitle}</p>
    </div>
  );
};

export default Result;
