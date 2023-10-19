import { getByID } from "../static/constants.js";
import { cardForArrayProducts } from "../services/retrieve-cards.js";
import { getCartContent, getProductsArrCart } from "../services/cart-add-retrieval.js";

let ele = getByID('cart-section')

ele!.innerHTML = cardForArrayProducts(getProductsArrCart())
ele!.classList.add('d-flex', 'flex-wrap', 'gap-4');

console.log('cart ts is working at the end')