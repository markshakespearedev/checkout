import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const ReviewChart = ({ reviews }) => {
    const reviewsWithIndex = reviews.map((review, index) => ({
        ...review,
        index: index + 1,
    }));

    return (
        <VictoryChart theme={VictoryTheme.material}>
            <VictoryAxis label="User review index" />
            <VictoryAxis dependentAxis label="Rating" />
            <VictoryBar data={reviewsWithIndex} y="rating" x="index" />
        </VictoryChart>
    );
};

export default ReviewChart;
