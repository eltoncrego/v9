import React, { Fragment, useEffect } from 'react';
import Landing from './landing/landing';
import About from './about/about';
import Resume from './resume/resume';
import Footer from '../footer/footer';
import useLoader from '../loader/index';

const SWESite = () => {
  const loader = useLoader();
  useEffect(() => {
    document.title = 'Elty • Front-End Engineer';
  }, []);
  return (
    <Fragment>
      <Landing onLoadAction={() => loader.setLoaderActive(true)} />
      <About />
      <Resume />
      <Footer />
    </Fragment>
  );
};

export default SWESite;
