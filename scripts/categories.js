import { addBtnToCart } from "../services/cart-add-retrieval.js";
import { getProdCategFromStor } from "../services/fetch-from-local.js";
import { cardForArrayProducts } from "../services/retrieve-cards.js";
import { setUpSortDropdown } from "../services/sort-filters.js";
import { getByID } from "../static/constants.js";
let identifier = getByID('categ-header');
let cardsLander = getByID('all-cards');
let productsFromStor;
cardsLander.classList.add('d-flex', 'flex-wrap', 'gap-4');
console.log('contents are: ');
console.log(identifier === null || identifier === void 0 ? void 0 : identifier.innerHTML);
switch (identifier === null || identifier === void 0 ? void 0 : identifier.textContent) {
    case "Men's Clothing":
        // console.log("logic's working!!")
        renderCards("men's clothing");
        break;
    case "Women's Clothing":
        renderCards("women's clothing");
        break;
    case "Jewellery":
        renderCards('jewelery');
        break;
    case 'Electronics':
        renderCards('electronics');
        break;
}
function renderCards(categ) {
    // console.log('function called')
    productsFromStor = getProdCategFromStor(categ);
    // console.log(productsFromStor)
    let cardsGen = cardForArrayProducts(productsFromStor);
    cardsLander.innerHTML = cardsGen;
    console.log('in render cards before call');
    addBtnToCart();
    console.log('in render cards after call');
}
setUpSortDropdown(cardsLander, productsFromStor);