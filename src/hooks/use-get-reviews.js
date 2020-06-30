import { useState, useEffect } from 'react';

// lets "seed" our imaginary database with some existing feedback from other users
import mockComments from '../../mock/reviews';

const localStorageKey = 'allReviews';

const useGetReviews = () => {
    const [value, setValue] = useState(() => {
        const localStorageReviews = window.localStorage.getItem(
            localStorageKey
        );
        return localStorageReviews !== null
            ? JSON.parse(localStorageReviews)
            : mockComments;
    });

    useEffect(() => {
        window.localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [localStorageKey, value]);

    return [value, setValue];
};

export default useGetReviews;
