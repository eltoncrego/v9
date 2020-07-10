import React from 'react';
import PropTypes from 'prop-types';
import { MUSIC_MESSAGES } from '../../../content/content';
import LinkList from '../song-links';

const SongTree = ({ pathname, songInfo }) => {
  const { PATH_TO_TREES } = MUSIC_MESSAGES;
  const songLinks = PATH_TO_TREES[pathname];

  return (
    <div className='music__page-wrapper'>
      <div id='landing--music'>
        <div className='music-landing__title'>
          <h1>{songInfo.TITLE}</h1>
          <span>{songInfo.DESC}</span>
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
    DESC: PropTypes.string.isRequired,
  }).isRequired,
};

export default SongTree;
