import utils from './utils.js';
import generateHTMLForWorks from './generateWorks.js';
import generateHTMLForFiltersWithEvents from './generateFilters.js';
import { generateHTMLAdminMode } from './admin.js';
import auth from './auth.js';

if (auth.isLoggedIn()) {
    generateHTMLAdminMode();
}

const categories = await utils.getCategories();
generateHTMLForFiltersWithEvents(categories);

const works = await utils.getWorks();
generateHTMLForWorks(works);
