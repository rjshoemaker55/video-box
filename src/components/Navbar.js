import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageContent } from '../redux/slices/contentSlice';
import { createUseStyles } from 'react-jss';
import { colors } from '../utilities/colors';
import githubLogo from '../images/github-logo-white.png';

const useStyles = createUseStyles({
  //! Mobile Styling
  navbarWrapper: {
    display: 'flex',
    padding: '0 16px',
    backgroundColor: colors.darkBlue,
    flexWrap: 'wrap',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    flexBasis: '100%',
    marginTop: '7px',
  },
  titleText: {
    fontFamily: 'Berkshire Swash, cursive',
    fontSize: '28px',
    color: colors.lemon,
  },
  searchWrapper: {
    display: 'flex',
    flex: 3,
    alignItems: 'center',
  },
  searchForm: {
    width: '100%',
  },
  searchBar: {
    width: '75%',
    margin: '7px 0',
    border: 'none',
    backgroundColor: 'transparent',
    borderBottom: '2px white solid',
    fontWeight: 'bold',
    height: '20px',
    color: colors.lemon,
  },
  searchButton: {
    width: '20%',
    height: '24px',
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
  },
  repoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  repoLogo: {
    width: '30%',
    display: 'table',
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
        <div className={classes.titleText}>videobox</div>
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
            go
          </button>
        </form>
      </div>
      <div className={classes.repoWrapper}>
        <img className={classes.repoLogo} src={githubLogo} />
      </div>
    </div>
  );
};

export default Navbar;
