import React, { useState, useMemo, useEffect } from 'react';
import LoaderContext from '../loader-context';
import Loader from '../loader';

function withLoaderProvider(Component) {
  const LoaderProvider = () => {
    const [loaderActive, setLoaderActive] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const providerValue = useMemo(() => {
      return { setLoaderActive };
    }, [loaderActive]);

    useEffect(() => {
      setTimeout(() => setLoaded(true), 1200);
    }, [loaderActive]);

    return (
      <LoaderContext.Provider value={providerValue}>
        {loaded ? null : <Loader isActive={loaderActive} />}
        <Component />
      </LoaderContext.Provider>
    );
  };
  return LoaderProvider;
}

export default withLoaderProvider;
