import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPageContent, setPageContent } from '../redux/slices/contentSlice';
import { mockResults } from '../mockResults';
const axios = require('axios');

const Results = (props) => {
  const [resultList, setResultList] = useState([]);
  const pageContent = useSelector(getPageContent);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pageContent.content.data) return;
    // axios
    //   .get('https://www.googleapis.com/youtube/v3/search', {
    //     params: {
    //       key: 'AIzaSyCKXbn-fL4CpKsPY4W4TZ3KVUTrh_5xE7c',
    //       part: 'snippet',
    //       type: 'video',
    //       q: pageContent.content.data,
    //     },
    //   })
    //   .then((res) => res)
    //   .then((data) => setResultList(data.data.items));

    setResultList(mockResults().items);
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
      {resultList.map((result) => {
        const videoId = result.id.videoId;
        const thumbnail = result.snippet.thumbnails.default;
        const { channelTitle, title } = result.snippet;

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
      })}
    </div>
  );
};

export default Results;
