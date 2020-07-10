import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './song-links.css';
import useLoader from '../../loader';

const LinkList = ({ list }) => {
  const history = useHistory();
  const loader = useLoader();
  useEffect(() => loader.setLoaderActive(true), [loader]);
  return (
    <div className='link-list__container'>
      {list.map((link, index) => {
        const handleLinkClick = () => {
          history.push(link.to);
        };

        const handleExternalClick = () => {
          window.open(link.href);
        };

        return (
          <div
            className='link-list__link'
            key={index}
            onClick={link.to ? handleLinkClick : handleExternalClick}
          >
            {link.title}
          </div>
        );
      })}
    </div>
  );
};

LinkList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default LinkList;
