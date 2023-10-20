import { getByID } from "../static/constants.js";
import { addCardToProduct, cardForArrayCart } from "../services/retrieve-cards.js";
import { addProdCartID, getCartContent, getCartTotal, getProdQuant, removeProdCartID } from "../services/cart-add-retrieval.js";
import { getProdIDFromStor } from "../services/fetch-from-local.js";
let ele = getByID('cart-section');
let content = [];
content = getCartContent();
if (content.length == 0) {
    ele === null || ele === void 0 ? void 0 : ele.innerHTML = "Cart is Empty";
    ele === null || ele === void 0 ? void 0 : ele.classList.add('display-4', 'ms-5', 'mt-5');
}
else {
    ele.innerHTML = cardForArrayCart(content);
}
addCardToProduct();
ele.classList.add('d-flex', 'flex-wrap', 'gap-4');
console.log('check here ');
console.log(ele === null || ele === void 0 ? void 0 : ele.innerHTML);
let elements = ele === null || ele === void 0 ? void 0 : ele.getElementsByClassName('inc-quant');
// console.log(elements)
let arr = [].slice.call(elements);
arr.forEach((ele) => {
    ele.addEventListener('click', (event) => {
        let targetID = event.target.id;
        // console.log(targetID);
        let prodID = parseInt(targetID.substring(4));
        // console.log('id is: ', prodID)
        addProdCartID(prodID);
        let idname = `quant-cart-${prodID.toString()}`;
        // console.log(idname)
        let ele = getByID(`quant-cart-${idname}`);
        // console.log(ele)
        getByID(`quant-cart-${prodID.toString()}`).innerHTML = getProdQuant(prodID).toString();
        getByID(`prod-total-${prodID}`).innerHTML = `$ ${getProdQuant(prodID) * getProdIDFromStor(prodID).price}`;
        updateCartTotal();
        getByID(`prod-quant-${prodID}`).innerHTML = getProdQuant(prodID).toString();
        if (getProdQuant(prodID) == 0)
            window.location.reload();
    });
});
let decEle = ele === null || ele === void 0 ? void 0 : ele.getElementsByClassName('dec-quant');
// console.log(decEle)
let decArr = [].slice.call(decEle);
decArr.forEach((ele) => {
    ele.addEventListener('click', (event) => {
        let targetID = event.target.id;
        // console.log(targetID);
        let prodID = parseInt(targetID.substring(4));
        // console.log('id is: ', prodID)
        removeProdCartID(prodID);
        // console.log(getProdQuant(prodID))
        // console.log(getByID('quant-cart'))
        document.getElementById(`quant-cart-${prodID}`).innerHTML = getProdQuant(prodID).toString();
        getByID(`prod-total-${prodID}`).innerHTML = `$ ${getProdQuant(prodID) * getProdIDFromStor(prodID).price}`;
        updateCartTotal();
        getByID(`prod-quant-${prodID}`).innerHTML = getProdQuant(prodID).toString();
        if (getProdQuant(prodID) == 0)
            window.location.reload();
    });
});
updateCartTotal();
function updateCartTotal() {
    let ele = getByID('checkout');
    ele === null || ele === void 0 ? void 0 : ele.innerHTML = getCartTotal().toString();
}
console.log('cart ts is working at the end');
