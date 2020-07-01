import React, { Fragment } from 'react';

import styles from './template.css';
import ReviewPage from '../review-page';

const Template = () => (
    <Fragment>
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                Mark's Cakes
            </a>
        </header>

        <ReviewPage />
    </Fragment>
);

export default Template;
