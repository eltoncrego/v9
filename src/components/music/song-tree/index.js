import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MUSIC_MESSAGES } from '../../../content/content';
import LinkList from '../song-links';
import './song-tree.css';

const SongTree = ({ pathname, songInfo }) => {
  const { PATH_TO_TREES } = MUSIC_MESSAGES;
  const songLinks = PATH_TO_TREES[pathname];

  useEffect(() => {
    document.title = `Elty • ${songInfo.TITLE}`;
  }, [songInfo.TITLE]);

  return (
    <div className='music__page-wrapper'>
      <div id='landing--music'>
        <div className='music-landing__title'>
          <h1>{songInfo.TITLE}</h1>
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
