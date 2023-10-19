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
// console.log(products)
HOME_ALL_CARDS.innerHTML = cardForArrayProducts(products);
// Add to Cart Button for cards
let buttons = document.querySelectorAll('.cart-btn');
console.log(buttons); // remove .........................
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
setUpSortDropdown(HOME_ALL_CARDS, products);
// let ele = getByID('sortFilter')
// ele!.innerHTML = `
//     <div class="dropdown">
//         <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Sort & Filter
//         </button>
//         <ul class="dropdown-menu dropdown-menu-dark">
//             <li id="no-sort" class='ps-3'>None</li>
//             <li><hr class="dropdown-divider"></li>
//             <li id="price-l-h"><a class="dropdown-item" href="#">by Price [Low to High]</a></li>
//             <li id="price-h-l"><a class="dropdown-item" href="#">by Price [High to Low]</a></li>
//             <li><hr class="dropdown-divider"></li>
//             <li id="rating-sort"><a class="dropdown-item" href="#">by Rating</a></li>
//             <li id="review-count"><a class="dropdown-item" href="#">by No. of Reviews</a></li>
//         </ul>
//     </div>
// `
// let priceL2H = getByID('price-l-h')
// let priceH2L = getByID('price-h-l')
// let ratingSort = getByID('rating-sort')
// let reviewCount = getByID('review-count')
// let arr = [[priceH2L, sortByPriceHTL], [priceL2H, sortByPriceLTH], [ratingSort, sortByRating], [reviewCount, sortByReviewCount]]
// arr.forEach((ele: Array<any>) => sortFunctionHelper(ele[0]!, ele[1], products, HOME_ALL_CARDS!))
// priceL2H?.addEventListener('click', () => {
//     let sortedCards: Array<Prod> = sortByPriceLTH(products)
//     HOME_ALL_CARDS!.innerHTML = cardForArrayProducts(sortedCards)
// })
// priceH2L?.addEventListener('click', () => {
//     let sortedCards: Array<Prod> = sortByPriceHTL(products)
//     HOME_ALL_CARDS!.innerHTML = cardForArrayProducts(sortedCards);
// })
// ratingSort?.addEventListener('click', () => {
//     let sortedCards: Array<Prod> = sortByRating(products)
//     HOME_ALL_CARDS!.innerHTML = cardForArrayProducts(sortedCards);
// })
// reviewCount?.addEventListener('click', () => {
//     let sortedCards: Array<Prod> = sortByReviewCount(products)
//     HOME_ALL_CARDS!.innerHTML = cardForArrayProducts(sortedCards)
// })
