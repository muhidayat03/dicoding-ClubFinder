import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value).then(renderResult, fallbackResult);
    };

    const renderResult = (results) => {
        console.log(results)
        clubListElement.clubs = results;
    };

    const fallbackResult = (message) => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};


export default main;