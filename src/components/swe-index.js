import React, { Fragment } from 'react';
import Landing from './landing/landing';
import About from './about/about';
import Resume from './resume/resume';
import Footer from './footer/footer';
import useLoader from './loader/index';

const SWESite = () => {
  const loader = useLoader();
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
