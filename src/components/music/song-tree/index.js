import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MUSIC_MESSAGES } from '../../../content/content--music';
import LinkList from '../song-links';
import './song-tree.css';
import useLoader from '../../loader';
import SocialLinks from '../social-links';

const SongTree = ({ pathname, songInfo }) => {
  const { PATH_TO_TREES } = MUSIC_MESSAGES;
  const songLinks = PATH_TO_TREES[pathname];

  const loader = useLoader();
  useEffect(() => loader.setLoaderActive(true), [loader]);

  useEffect(() => {
    document.title = `Elty • ${songInfo.TITLE}`;
  }, [songInfo.TITLE]);

  return (
    <div className='music__page-wrapper'>
      <div id='landing--music'>
        <div className='music-landing__title'>
          <div className='music-landing__header-with-links'>
            <h1 className='header-with-links__title'>{songInfo.TITLE}</h1>
            <SocialLinks />
          </div>
          {songInfo.DESC.map((descItem) => (
            <Fragment key={descItem}>
              <div className='song-tree__desc-item'>{descItem}</div>
            </Fragment>
          ))}
        </div>
      </div>
      <LinkList list={songLinks} />
    </div>
  );
};

SongTree.propTypes = {
  pathname: PropTypes.string.isRequired,
  songInfo: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    DESC: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SongTree;
