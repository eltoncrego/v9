import React, { useState, useEffect } from 'react';
import Landing from './landing/landing';
import About from './about/about';
import Loader from './loader/loader';
import Resume from './resume/resume';
import Header from './header/header';
import Footer from './footer/footer';

const Site = () => {
  const [loaded, setLoaded] = useState(false);
  const [loaderActive, setLoaderActive] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 1200);
  }, [loaderActive]);

  return (
    <>
      {loaded ? null : <Loader isActive={loaderActive}/>}
      <Header/>
      <Landing onLoadAction={() => setLoaderActive(true)}/>
      <About/>
      <Resume/>
      <Footer/>
    </>
  );
};

export default Site;
