import { getByID } from "../static/constants.js";
import { cardForArrayProducts } from "../services/retrieve-cards.js";
import { getAllProdFromStor } from "../services/fetch-from-local.js";
const HOME_ALL_CARDS = getByID('all-cards');
HOME_ALL_CARDS.classList.add('d-flex', 'flex-wrap', 'gap-4');
const products = await getAllProdFromStor();
console.log(HOME_ALL_CARDS);
HOME_ALL_CARDS.innerHTML += cardForArrayProducts(products);
