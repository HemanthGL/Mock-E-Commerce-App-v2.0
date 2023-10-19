import { SORT_DROPDOWN, getByID } from "../static/constants.js";
import { cardForArrayProducts } from "./retrieve-cards.js";
export function sortByPriceHTL(products) {
    let sorted = sortByPriceLTH(products);
    return sorted.reverse();
}
export function sortByPriceLTH(products) {
    products.sort((a, b) => a.price - b.price);
    return products;
}
export function sortByRating(products) {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    return products.reverse();
}
export function sortByReviewCount(products) {
    products.sort((a, b) => a.rating.count - b.rating.count);
    return products.reverse();
}
export function sortFunctionHelper(ele, sortFn, products, container) {
    ele.addEventListener('click', () => {
        let sortedCards = sortFn(products);
        container.innerHTML = cardForArrayProducts(sortedCards);
    });
}
export function setUpSortDropdown(body, products) {
    let ele = getByID('sortFilter');
    ele.innerHTML = SORT_DROPDOWN;
    let priceL2H = getByID('price-l-h');
    let priceH2L = getByID('price-h-l');
    let ratingSort = getByID('rating-sort');
    let reviewCount = getByID('review-count');
    let arr = [[priceH2L, sortByPriceHTL], [priceL2H, sortByPriceLTH], [ratingSort, sortByRating], [reviewCount, sortByReviewCount]];
    arr.forEach((ele) => sortFunctionHelper(ele[0], ele[1], products, body));
}
