import { getByID } from "../static/constants.js";
import { cardForArrayProducts } from "../services/retrieve-cards.js";
import { getAllProdFromStor } from "../services/fetch-from-local.js";
import { addProdCartID } from "../services/cart-add-retrieval.js";
import { Prod } from "../static/interfaces.js";
import { setUpSortDropdown, sortByPriceHTL, sortByPriceLTH, sortByRating, sortByReviewCount, sortFunctionHelper } from "../services/sort-filters.js";

const HOME_ALL_CARDS = getByID('all-cards')

HOME_ALL_CARDS!.innerHTML = ''
HOME_ALL_CARDS!.classList.add('d-flex', 'flex-wrap', 'gap-4');

let products: Array<Prod> = []

products = await getAllProdFromStor();


HOME_ALL_CARDS!.innerHTML = cardForArrayProducts(products);

// Add to Cart Button for cards
let buttons = document.querySelectorAll('.cart-btn')

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let btnID = (event.target as HTMLElement).id!;
        console.log(btnID, ' is the button ID')

        let element = document.getElementById(`${btnID}`)
        element!.textContent = "Added to Cart"
        element!.style.backgroundColor = 'yellow'
        element!.style.color = "black"

        addProdCartID(parseInt(btnID));
    })
})

getByID('search-bar')?.addEventListener('click', () => {
    console.log('search activated')
    let val: string = getByID('search-input')?.textContent

    let subgrp: Array<Prod> = [];
    products.forEach((ele:Prod) => {
        if(ele.title.toLowerCase().includes(val.toLowerCase()))
            subgrp.push(ele)
    })
    console.log(subgrp)
    HOME_ALL_CARDS!.innerHTML = cardForArrayProducts(subgrp)

})

setUpSortDropdown(HOME_ALL_CARDS!, products)