import React from 'react';
import PropTypes from 'prop-types';

import styles from './review-list.css';
import StarIcon from '../icons/star.svg';
import { RATING_OPTIONS } from '../../lib/constants';

const ReviewList = ({ reviews }) => (
    <div className={styles.reviewsContainer}>
        <h2 className={styles.reviewHeading}>What our users have to say...</h2>

        <ul data-test="review-list" className={styles.latestReviews}>
            {reviews.map(({ text, id, rating }) => (
                <li key={id} className={styles.reviewItem}>
                    <div>
                        {[...Array(rating)].map((_, index) => (
                            <StarIcon
                                key={index}
                                color="gold"
                                height="12px"
                                width="12px"
                            />
                        ))}
                    </div>
                    <p>{text}</p>
                </li>
            ))}
        </ul>
    </div>
);

ReviewList.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            rating: PropTypes.oneOf(RATING_OPTIONS).isRequired,
            text: PropTypes.string,
        })
    ).isRequired,
};

export default ReviewList;
