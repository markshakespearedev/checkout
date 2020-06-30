import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import RatingStar from '../rating-star';
import { RATING_OPTIONS } from '../../lib/constants';

const RatingStars = ({ handleClickStar, starRating }) => (
    <Fragment>
        {RATING_OPTIONS.map((rating) => (
            <RatingStar
                key={rating}
                rating={rating}
                handleClickStar={handleClickStar}
                isActive={starRating >= rating}
            />
        ))}
    </Fragment>
);

RatingStars.propTypes = {
    handleClickStar: PropTypes.func.isRequired,
    starRating: PropTypes.oneOf(RATING_OPTIONS),
};

RatingStars.defaultProps = {
    starRating: null,
};

export default RatingStars;
