import utils from './utils.js';
import generateHTMLForWorks from './generateWorks.js';
import generateHTMLForFiltersWithEvents from './generateFilters.js';
import { generateHTMLAdminMode } from './admin.js';
import auth from './auth.js';

if (auth.isLoggedIn()) {
    generateHTMLAdminMode();
}

const categories = await utils.callAPI('/categories');
generateHTMLForFiltersWithEvents(categories);

const works = await utils.callAPI('/works');
generateHTMLForWorks(works);
