import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import { RATING_OPTIONS } from '../../lib/constants';

const ReviewChart = ({ reviews }) => {
    const reviewsWithIndex = reviews.map((review, index) => ({
        ...review,
        index: index + 1,
    }));

    return (
        <VictoryChart theme={VictoryTheme.material}>
            <VictoryAxis
                tickValues={RATING_OPTIONS}
                label="User review index"
            />
            <VictoryAxis dependentAxis label="Rating" />
            <VictoryBar data={reviewsWithIndex} y="rating" x="index" />
        </VictoryChart>
    );
};

export default ReviewChart;
