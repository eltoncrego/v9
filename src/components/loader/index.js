import { useContext } from 'react';
import LoaderContext from './loader-context';

const useLoader = () => {
  const context = useContext(LoaderContext);
  return { setLoaderActive: context.setLoaderActive };
};

export default useLoader;
