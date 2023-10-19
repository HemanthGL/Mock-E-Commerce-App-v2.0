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
