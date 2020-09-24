import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPageContent, setPageContent } from '../redux/slices/contentSlice';
import { mockResults } from '../mockResults';
import Result from '../components/Result';
const axios = require('axios');

const Results = (props) => {
  const [resultList, setResultList] = useState([]);
  const pageContent = useSelector(getPageContent);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pageContent.content.data) return;
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: process.env.REACT_APP_API_KEY,
          part: 'snippet',
          type: 'video',
          q: pageContent.content.data,
        },
      })
      .then((res) => res)
      .then((data) => setResultList(data.data.items));

    // setResultList(mockResults().items);
  }, [pageContent]);

  const openVideo = (id) => {
    dispatch(
      setPageContent({
        component: 'VideoScreen',
        data: resultList.filter((result) => result.id.videoId === id)[0],
      })
    );
  };

  return (
    <div className='results-wrapper'>
      {resultList.map((result) => (
        <Result
          key={result.id.videoId}
          videoId={result.id.videoId}
          thumbnail={result.snippet.thumbnails.default}
          channelTile={result.snippet.channelTile}
          title={result.snippet.title}
          openVideo={openVideo}
        />
      ))}
    </div>
  );
};

export default Results;
