import React from 'react';
import { useSelector } from 'react-redux';
import { getPageContent } from '../redux/slices/contentSlice';
import Results from './Results';
import VideoScreen from './VideoScreen';
import Navbar from '../components/Navbar';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  landingWrapper: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

const Landing = () => {
  const pageContent = useSelector(getPageContent);

  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.landingWrapper}>
        {pageContent.content.component === 'Results' ? (
          <Results />
        ) : (
          pageContent.content.component === 'VideoScreen' && <VideoScreen />
        )}
      </div>
    </>
  );
};

export default Landing;
