import React, { Fragment } from 'react';

import styles from './page.css';
import Container from '../container';

const Page = () => (
    <Fragment>
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                Mark's Cakes
            </a>
        </header>

        <Container />
    </Fragment>
);

export default Page;
