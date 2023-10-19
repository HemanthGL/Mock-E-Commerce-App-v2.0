var _a;
import { getByID } from "../static/constants.js";
import { cardForArrayProducts } from "../services/retrieve-cards.js";
import { getAllProdFromStor } from "../services/fetch-from-local.js";
import { addProdCartID } from "../services/cart-add-retrieval.js";
import { setUpSortDropdown } from "../services/sort-filters.js";
const HOME_ALL_CARDS = getByID('all-cards');
HOME_ALL_CARDS.innerHTML = '';
HOME_ALL_CARDS.classList.add('d-flex', 'flex-wrap', 'gap-4');
let products = [];
products = await getAllProdFromStor();
HOME_ALL_CARDS.innerHTML = cardForArrayProducts(products);
// Add to Cart Button for cards
let buttons = document.querySelectorAll('.cart-btn');
buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let btnID = event.target.id;
        console.log(btnID, ' is the button ID');
        let element = document.getElementById(`${btnID}`);
        element.textContent = "Added to Cart";
        element.style.backgroundColor = 'yellow';
        element.style.color = "black";
        addProdCartID(parseInt(btnID));
    });
});
(_a = getByID('search-bar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    var _a;
    console.log('search activated');
    let val = (_a = getByID('search-input')) === null || _a === void 0 ? void 0 : _a.textContent;
    let subgrp = [];
    products.forEach((ele) => {
        if (ele.title.toLowerCase().includes(val.toLowerCase()))
            subgrp.push(ele);
    });
    console.log(subgrp);
    HOME_ALL_CARDS.innerHTML = cardForArrayProducts(subgrp);
});
setUpSortDropdown(HOME_ALL_CARDS, products);
