import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import styles from './review-form.css';
import RatingStars from '../rating-stars';

const ReviewForm = ({ setReviews, setSavedReviewSuccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [starRating, setStarRating] = useState(null);
    const [starRatingError, setStarRatingError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!starRating) {
            return setStarRatingError('Please enter a rating');
        }

        const createdAt = Date.now();

        setReviews((reviews) => [
            ...reviews,
            {
                id: uuidv4(),
                text: comment,
                userName: name,
                rating: starRating,
                createdAt,
            },
        ]);

        setSavedReviewSuccess(true);
    };

    const handleClickStar = ({ e, rating }) => {
        e.preventDefault();
        setStarRating(rating);
    };

    return (
        <form
            name="review-form"
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <div className={styles.inputWrapper}>
                <label htmlFor="name">Name*</label>

                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    className={styles.input}
                />
            </div>

            <div className={styles.inputWrapper}>
                <label htmlFor="email">Email*</label>

                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    className={styles.input}
                />
            </div>

            <div>
                <RatingStars
                    handleClickStar={handleClickStar}
                    starRating={starRating}
                />

                {starRatingError && (
                    <div className={styles.error} data-test="star-rating-error">
                        {starRatingError}
                    </div>
                )}
            </div>

            <div className={styles.inputWrapper}>
                <label htmlFor="comment">Comment</label>

                <textarea
                    name="comment"
                    id="comment"
                    value={comment}
                    onChange={({ target }) => setComment(target.value)}
                    className={styles.input}
                />
            </div>

            <button
                type="submit"
                disabled={email === '' || name === ''}
                className={styles.button}
            >
                Save
            </button>
        </form>
    );
};

ReviewForm.propTypes = {
    setReviews: PropTypes.func.isRequired,
    setSavedReviewSuccess: PropTypes.func.isRequired,
};

export default ReviewForm;
