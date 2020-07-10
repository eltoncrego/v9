import React, { useEffect } from 'react';
import Landing from './landing';
import useLoader from '../loader';
import './music.css';
import LinkList from './song-links';
import { MUSIC_MESSAGES } from '../../content/content';

const MusicSite = () => {
  const loader = useLoader();
  useEffect(() => loader.setLoaderActive(true), [loader]);
  
  useEffect(() => {
    document.title = 'Elty\'s Music';
  }, []);

  const { SONG_LINKS } = MUSIC_MESSAGES;

  return (
    <div className='music__page-wrapper'>
      <Landing />
      <LinkList list={SONG_LINKS} />
    </div>
  );
};

export default MusicSite;
