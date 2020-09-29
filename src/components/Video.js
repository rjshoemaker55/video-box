import React from 'react';
import { useSelector } from 'react-redux';
import { getPageContent } from '../redux/slices/contentSlice';
import { createUseStyles } from 'react-jss';
import { colors } from '../utilities/colors';

const useStyles = createUseStyles({
  videoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.marroon,
    width: '100%',
  },
});

const Video = () => {
  const video = useSelector(getPageContent).content.data;
  const classes = useStyles();

  return (
    <div className={classes.videoWrapper}>
      <iframe
        title='Youtube'
        id='ytplayer'
        type='text/html'
        width='640'
        height='570'
        src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&origin=http://example.com`}
        frameBorder='0'
        allow='autoplay'
        width='1200px'
      ></iframe>
    </div>
  );
};

export default Video;
