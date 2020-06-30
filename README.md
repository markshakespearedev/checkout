# Marks Cake Reviews

&#127874;

> A bare bones platform for visualising what customers think of our cake.

## Tools Used & Why

### Webpack

-   We need to be able to bundle our assets - html/css/javascript/icons into browser friendly files.
-   We need a way to run the project locally for development (webpack-dev-server)

### Babel

-   We want to be able to use all the latest javascript features and have it work across all modern browsers.

## About the Project

-   Mobile first - styles are written mobile first. Any changes in layout for larger screens are done using media query
    min-width.

## Testing strategy

-   mount container component and test the page as a user would interact with it - don't test internal component state.
-   Our page has an input (user interaction) and an output (what is rendered to the screen) - those are the 2 things we
    should be concerned with when writing tests.

## Performance and Metrics

-   TODO: adds lighthouse metrics?
-   TODO: look at react dev tools render performance
-   TODO: look at other possible useful metrics

## Browser Support

-   All modern browsers - in theory should not blow up in IE11, we're using css variables though.

## Improvements

-   Our data should be fetched from a permanent data source rather than localStorage.
-   Our current implementation of the chart isn't a great visual representation of how our average rating is changing over
    time. If we had a lot more data a multi line chart would be more useful.
