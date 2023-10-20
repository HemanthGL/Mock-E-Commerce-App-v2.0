import { getByID } from "../static/constants.js";
import { addCardToProduct, cardForArrayProducts } from "../services/retrieve-cards.js";
import { getAllProdFromStor } from "../services/fetch-from-local.js";
import { addBtnToCart, addProdCartID } from "../services/cart-add-retrieval.js";
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
let bubbles = document.querySelectorAll('.bubble');
console.log('bubbles are : ', bubbles);
bubbles.forEach((ele) => {
    let myID = (ele.id).substring(5);
    // console.log('ele here is ', myID)
    ele.addEventListener('click', () => {
        window.location.href = `./product.html?id=${myID}`;
    });
});
// get search bar element
const searchInput = document.getElementById("searchInput");
// store name elements in array-like object
// const namesFromDOM = document.getElementsByClassName("name");
// listen for user events
searchInput.addEventListener("keyup", (event) => {
    console.log(searchInput);
    let val = searchInput === null || searchInput === void 0 ? void 0 : searchInput.value;
    console.log(val);
    let subgrp = [];
    products.forEach((ele) => {
        if (ele.title.toLowerCase().includes(val.toLowerCase())) {
            subgrp.push(ele);
            console.log('subgrp added ele: ', ele);
        }
    });
    console.log(subgrp);
    HOME_ALL_CARDS.innerHTML = cardForArrayProducts(subgrp);
    addBtnToCart();
    addCardToProduct();
});
setUpSortDropdown(HOME_ALL_CARDS, products);
