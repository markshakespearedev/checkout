import React from 'react';
import { mount } from 'enzyme';

import Page from './components/template';

beforeEach(() => {
    localStorage.clear();
});

const createReview = ({ wrapper }) => {
    const nameInput = wrapper.find('input[name="name"]');
    const emailInput = wrapper.find('input[name="email"]');
    const commentInput = wrapper.find('textarea[name="comment"]');
    const thirdStar = wrapper.find({ 'data-test': 'rating-star' }).at(2);
    nameInput.simulate('change', { target: { value: 'Test Name' } });
    emailInput.simulate('change', { target: { value: 'Test Email' } });
    commentInput.simulate('change', { target: { value: 'Test Comment' } });
    thirdStar.simulate('click');
    wrapper.find('button[type="submit"]').simulate('submit');
};

test('it should render main semantic page elements (header, h1)', () => {
    const wrapper = mount(<Page />);
    expect(wrapper.find('header').find('a').props().href).toEqual('/');
    expect(wrapper.find('header').find('a').text()).toEqual(`Mark's Cakes`);
    expect(wrapper.find('h1').text()).toEqual('Tell us what you think');
});

test('it should render a list of reviews - using our mock data', () => {
    const wrapper = mount(<Page />);
    const reviewList = wrapper.find({ 'data-test': 'review-list' });
    expect(reviewList).toHaveLength(1);
    expect(reviewList.find('li')).toHaveLength(4);
    expect(reviewList.find('li').first().find('MockSvg')).toHaveLength(5);
    expect(reviewList.find('li').first().find('p').text()).toEqual(
        'The cakes are amazing!'
    );
});

test('it should allow the user to add their own review, by entering their name, email, a rating + comment', () => {
    const wrapper = mount(<Page />);
    createReview({ wrapper });
    const reviewList = wrapper.find({ 'data-test': 'review-list' });
    expect(reviewList.find('li')).toHaveLength(5);
    expect(reviewList.find('li').last().find('MockSvg')).toHaveLength(3);
    expect(reviewList.find('li').last().find('p').text()).toEqual(
        'Test Comment'
    );
});

test('it should persist user reviews into localStorage', () => {
    const wrapper = mount(<Page />);
    createReview({ wrapper });
    const allReviewsLocalStorage = JSON.parse(
        localStorage.getItem('allReviews')
    );

    expect(allReviewsLocalStorage).toEqual(
        expect.arrayContaining([
            {
                id: expect.any(String),
                text: 'Test Comment',
                userName: 'Test Name',
                rating: 3,
                createdAt: expect.any(Number),
            },
        ])
    );
});

test('it should render an error message if the user submits the form without selecting a rating', () => {
    const wrapper = mount(<Page />);
    const nameInput = wrapper.find('input[name="name"]');
    const emailInput = wrapper.find('input[name="email"]');
    nameInput.simulate('change', { target: { value: 'Test Name' } });
    emailInput.simulate('change', { target: { value: 'Test Email' } });
    wrapper.find('button[type="submit"]').simulate('submit');
    expect(wrapper.find({ 'data-test': 'star-rating-error' })).toHaveLength(1);
    expect(wrapper.find({ 'data-test': 'star-rating-error' }).text()).toEqual(
        'Please enter a rating'
    );
});

test('it should disable the review form button if the user has not entered a name / email', () => {
    const wrapper = mount(<Page />);
    expect(wrapper.find('button[type="submit"]').props().disabled).toEqual(
        true
    );
    const nameInput = wrapper.find('input[name="name"]');
    const emailInput = wrapper.find('input[name="email"]');
    nameInput.simulate('change', { target: { value: 'Test Name' } });
    emailInput.simulate('change', { target: { value: 'Test Email' } });
    expect(wrapper.find('button[type="submit"]').props().disabled).toEqual(
        false
    );
});

test('it should render a review chart', () => {
    const wrapper = mount(<Page />);
    expect(wrapper.find('VictoryBar')).toHaveLength(1);
    expect(wrapper.find('VictoryBar').props().data).toHaveLength(5);
    expect(wrapper.find('VictoryBar').props().data).toEqual([
        {
            createdAt: 1593526444030,
            id: '88eadf7c-1b95-4296-8cbc-81700b14b894',
            index: 1,
            rating: 5,
            text: 'The cakes are amazing!',
            userName: 'Bob',
        },
        {
            createdAt: 1593526966190,
            id: '45515446-284a-4d8b-837d-25dcce5fea5e',
            index: 2,
            rating: 3,
            text: "Not bad but i've had better",
            userName: 'Joe',
        },
        {
            createdAt: 1593527210403,
            id: 'a0f09d4d-c5ea-4a2e-b2dd-592bcb73d025',
            index: 3,
            rating: 1,
            text: 'really bad',
            userName: 'Rob',
        },
        {
            createdAt: 1593527230021,
            id: 'e9e28fe6-06f5-4cbb-a3ca-7b2b23ea28ec',
            index: 4,
            rating: 5,
            text: 'so good!',
            userName: 'Matthew',
        },
        {
            createdAt: 1593527260724,
            id: '4c45392f-83e3-40a8-bb8b-b0af107523cc',
            index: 5,
            rating: 4,
            text: '',
            userName: 'Tom',
        },
    ]);
    expect(wrapper.find('VictoryBar').props().y).toEqual('rating');
    expect(wrapper.find('VictoryBar').props().x).toEqual('index');
});

test('it should update the chart when a new review is added', () => {
    const wrapper = mount(<Page />);
    createReview({ wrapper });
    const chartProps = wrapper.find('VictoryBar').props();
    expect(chartProps.data).toHaveLength(6);
    expect(chartProps.data).toEqual(
        expect.arrayContaining([
            {
                id: expect.any(String),
                text: 'Test Comment',
                userName: 'Test Name',
                rating: 3,
                createdAt: expect.any(Number),
                index: 6,
            },
        ])
    );
});
