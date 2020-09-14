import React from 'react';
import YouTube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import { getPageContent, setPageContent } from '../redux/slices/contentSlice';

const Video = () => {
  const videoId = useSelector(getPageContent).content.data;

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters,
      autoplay: 1,
    },
  };

  return (
    <div className='video-wrapper'>
      <iframe
        id='ytplayer'
        type='text/html'
        width='640'
        height='360'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameBorder='0'
      ></iframe>
    </div>
  );
};

export default Video;
