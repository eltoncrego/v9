import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import withLoaderProvider from './loader/loader-provider';
import Header from './header/header';
import SWESite from './swe/index';
import MusicSite from './music/index';
import { MUSIC_MESSAGES, LYRICS } from '../content/content--music';
import SongTree from './music/song-tree';
import Lyrics from './music/lyrics';

const history = createBrowserHistory();

const Site = () => {
  const { SONG_INFO } = MUSIC_MESSAGES;
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path='/music'>
          <MusicSite />
        </Route>
        {Object.keys(SONG_INFO).map((key) => (
          <Route key={key} exact path={key}>
            <SongTree pathname={key} songInfo={SONG_INFO[key]} />
          </Route>
        ))}
        {Object.keys(LYRICS).map((key) => (
          <Route key={key} exact path={`/lyrics/${key}`}>
            <Lyrics pathname={key} lyrics={LYRICS[key]} />
          </Route>
        ))}
        <Route path='/'>
          <SWESite />
        </Route>
      </Switch>
    </Router>
  );
};

export default withLoaderProvider(Site);
