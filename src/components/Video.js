import React from 'react';
import { useSelector } from 'react-redux';
import { getPageContent } from '../redux/slices/contentSlice';

const Video = () => {
  const video = useSelector(getPageContent).content.data;

  return (
    <div className='video-wrapper'>
      <iframe
        title='Youtube'
        id='ytplayer'
        type='text/html'
        width='640'
        height='360'
        src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&origin=http://example.com`}
        frameBorder='0'
      ></iframe>
    </div>
  );
};

export default Video;
