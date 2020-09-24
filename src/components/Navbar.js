import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageContent } from '../redux/slices/contentSlice';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  //! Mobile Styling
  navbarWrapper: {
    display: 'flex',
    height: '56px',
    padding: '0 16px',
    backgroundColor: 'red',
    flexWrap: 'wrap',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    flexBasis: '100%',
  },
  searchWrapper: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    '& searchForm': {
      marginRight: 'auto',
    },
  },
  repoWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    '& repoText': {
      marginLeft: 'auto',
    },
  },

  //! Tablet Styling - 768px and above
  '@media screen and (min-width: 768px)': {
    titleWrapper: {
      order: 2,
      flexBasis: 0,
    },
    searchWrapper: {
      order: 1,
    },
    repoWrapper: {
      order: 3,
    },
  },
});

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const classes = useStyles();

  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.titleWrapper}>
        <div className={classes.titleText}>Videobox</div>
      </div>
      <div className={classes.searchWrapper}>
        <form className={classes.searchForm}>
          <input
            className={classes.searchBar}
            placeholder='Search'
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          <button
            className={classes.searchButton}
            onClick={() =>
              dispatch(
                setPageContent({ component: 'Results', data: searchQuery })
              )
            }
            type='submit'
          >
            Go
          </button>
        </form>
      </div>
      <div className={classes.repoWrapper}>
        <div className={classes.repoText}>Repo</div>
      </div>
    </div>
  );
};

export default Navbar;
