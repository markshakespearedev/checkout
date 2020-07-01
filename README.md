# Marks Cake Reviews

&#127874;

> A bare bones platform for visualising what customers think of our cake.

## About the Project

-   [Live project here](https://priceless-galileo-964532.netlify.app)
-   Deployed via netlify for simplicity - merging to master publishes to https://priceless-galileo-964532.netlify.app
-   Mobile first - styles are written mobile first. Any changes in layout for larger screens are done using media query
    min-width.

## Tools Used & Why

### Webpack

-   We need to be able to bundle our assets - html/css/javascript/icons into browser friendly files.
-   We need a way to run the project locally for development (webpack-dev-server)

### Babel

-   We want to be able to use all the latest javascript features and have it work across all modern browsers.

## Testing strategy

-   mount page component and test the page as a user would interact with it - don't test internal component state.
-   Our page has an input (user interaction) and an output (what is rendered to the screen) - those are the 2 things we
    should be concerned with when writing tests.
-   Currently focusing on integration tests, If the project was to grow and we wanted to make our components more
    re-usable we would probably add some unit tests so that we know they work in isolation.

## Performance and Metrics

-   Google Lighthouse audit has positive results...

![Google Metrics](./docs/audit.png)

## Browser Support

-   All modern browsers - in theory should not blow up in IE11, we're using css variables though.

## Improvements

-   Our current implementation of the chart isn't a great visual representation of how our average rating is changing over
    time. If we had a lot more data a multi line chart would be more useful.
-   We need more validation in our review form, at the moment a name/comment can be any length etc. + in the real world we
    would need error messages for invalid inputs.
-   Our data should be fetched from a permanent data source rather than localStorage.
-   We could display the name along with the review in the list for a more personable experience.
