import React from 'react';
import PropTypes from 'prop-types';

import StarIcon from '../icons/star.svg';
import styles from './rating-star.css';
import { RATING_OPTIONS } from '../../lib/constants';

const RatingStar = ({ rating, handleClickStar, isActive }) => (
    <button
        data-test="rating-star"
        onClick={(e) => handleClickStar({ e, rating })}
        className={styles.rating}
        aria-label={`rating ${rating}`}
    >
        <StarIcon color={isActive ? 'gold' : 'grey'} />
    </button>
);

RatingStar.propTypes = {
    rating: PropTypes.oneOf(RATING_OPTIONS).isRequired,
    handleClickStar: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default RatingStar;
