import React, { useEffect } from 'react';
import Landing from './landing';
import useLoader from '../loader';
import './music.css';

const MusicSite = () => {
  const loader = useLoader();
  useEffect(() => loader.setLoaderActive(true), []);
  return (
    <div className='music__page-wrapper'>
      <Landing />
    </div>
  );
};

export default MusicSite;
