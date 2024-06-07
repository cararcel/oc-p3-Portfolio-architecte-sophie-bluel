import utils from './utils.js';
import generateHTMLForWorks from './generateWorks.js';
import generateHTMLForFiltersWithEvents from './generateFilters.js';
import { generateHTMLAdminMode } from './admin.js';

if (utils.getToken() !== null) {
    generateHTMLAdminMode();
}

const categories = await utils.callAPI('/categories');
generateHTMLForFiltersWithEvents(categories);

const works = await utils.callAPI('/works');
generateHTMLForWorks(works);
