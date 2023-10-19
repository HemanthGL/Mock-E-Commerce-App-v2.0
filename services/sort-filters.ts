import { Prod } from "../static/interfaces";
import { cardForArrayProducts } from "./retrieve-cards.js";

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
    })
}