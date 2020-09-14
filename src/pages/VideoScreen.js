import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPageContent, setPageContent } from '../redux/slices/contentSlice';
import Video from '../components/Video';

const VideoScreen = () => {
  const dispatch = useDispatch();

  console.log(useSelector(getPageContent));

  return <div className='video-screen-wrapper'>video screen</div>;
};

export default VideoScreen;
