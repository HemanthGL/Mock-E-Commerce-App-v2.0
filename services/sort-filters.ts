import { SORT_DROPDOWN, getByID } from "../static/constants.js";
import { Prod } from "../static/interfaces";
import { addBtnToCart } from "./cart-add-retrieval.js";
import { addCardToProduct, cardForArrayProducts } from "./retrieve-cards.js";

export function sortByPriceHTL(products: Array<Prod>): Array<Prod>{
   let sorted = sortByPriceLTH(products)
   return sorted.reverse(); 
}

export function sortByPriceLTH(products: Array<Prod>): Array<Prod>{
   products.sort((a: Prod, b: Prod) => a.price - b.price)
   return products; 
}

export function sortByRating(products: Array<Prod>): Array<Prod>{
    products.sort((a: Prod, b: Prod) => a.rating.rate - b.rating.rate)
    return products.reverse();
}

export function sortByReviewCount(products: Array<Prod>): Array<Prod>{
    products.sort((a:Prod, b: Prod) => a.rating.count - b.rating.count);
    return products.reverse();
}

export function sortFunctionHelper(ele: HTMLElement, sortFn: Function, products: Array<Prod>, container: HTMLElement){
    ele.addEventListener('click', () => {
        let sortedCards: Array<Prod> = sortFn(products)
        container.innerHTML = cardForArrayProducts(sortedCards);

        addBtnToCart()
        addCardToProduct()
    })
}

export function setUpSortDropdown(body: HTMLElement, products: Array<Prod>){

    let ele = getByID('sortFilter')

    ele!.innerHTML = SORT_DROPDOWN

    let priceL2H = getByID('price-l-h')
    let priceH2L = getByID('price-h-l')
    let ratingSort = getByID('rating-sort')
    let reviewCount = getByID('review-count')

    let arr = [[priceH2L, sortByPriceHTL], [priceL2H, sortByPriceLTH], [ratingSort, sortByRating], [reviewCount, sortByReviewCount]]

    arr.forEach((ele: Array<any>) => sortFunctionHelper(ele[0]!, ele[1], products, body!))

}