import React, { useState, Fragment } from 'react';

import styles from './review-page.css';
import ReviewForm from '../review-form';
import ReviewList from '../review-list';
import ReviewChart from '../review-chart';
import useGetReviews from '../../hooks/use-get-reviews';

const ReviewPage = () => {
    const [savedReviewSuccess, setSavedReviewSuccess] = useState(false);
    const [reviews, setReviews] = useGetReviews();

    // we don't want to render reviews without comments in the list
    const reviewsWithComments = reviews.filter(({ text }) => text);

    return (
        <Fragment>
            <section className={styles.mainSection}>
                <div>
                    {!savedReviewSuccess && (
                        <Fragment>
                            <h1 className={styles.heading}>
                                Tell us what you think
                            </h1>
                            <ReviewForm
                                setReviews={setReviews}
                                setSavedReviewSuccess={setSavedReviewSuccess}
                            />
                        </Fragment>
                    )}

                    {savedReviewSuccess && (
                        <h1 className={styles.heading}>
                            Thanks for the feedback!
                        </h1>
                    )}
                </div>

                {reviewsWithComments && (
                    <ReviewList reviews={reviewsWithComments} />
                )}
            </section>

            <div className={styles.reviewChart}>
                <ReviewChart reviews={reviews} />
            </div>
        </Fragment>
    );
};

export default ReviewPage;
