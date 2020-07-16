import React, { Fragment, useEffect } from 'react';
import useLoader from '../../loader';

const Lyrics = ({ lyrics }) => {
  const loader = useLoader();
  useEffect(() => loader.setLoaderActive(true), [loader]);

  useEffect(() => {
    document.title = `Elty • ${lyrics.title} Lyrics`;
  }, [lyrics.title]);

  return (
    <div className='music__page-wrapper'>
      <div id='landing--music'>
        <div className='music-landing__title'>
          <h1>{lyrics.title}</h1>
          {lyrics.lyrics.map((block, index) => (
            <Fragment key={index}>
              <div className='song-tree__desc-item'>
                {block.map((line, index) => (
                  <Fragment key={index}>
                    <span>{line}</span>
                    <br />
                  </Fragment>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
