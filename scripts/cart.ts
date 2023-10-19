import { getByID } from "../static/constants.js";
import { cardForArrayCart, cardForArrayProducts } from "../services/retrieve-cards.js";
import { addProdCartID, getCartContent, getCartTotal, getProdQuant, getProductsArrCart, removeProdCartID } from "../services/cart-add-retrieval.js";
import { getProdIDFromStor } from "../services/fetch-from-local.js";

let ele = getByID('cart-section')

ele!.innerHTML = cardForArrayCart(getCartContent())
ele!.classList.add('d-flex', 'flex-wrap', 'gap-4');
console.log('check here ')
console.log(ele?.innerHTML)
let elements:HTMLCollectionOf<Element> = ele?.getElementsByClassName('inc-quant')!

// console.log(elements)
let arr = [].slice.call(elements)
arr.forEach((ele:Element) => {
    ele.addEventListener('click', (event) => {
        let targetID:string = (event.target as HTMLElement).id
        // console.log(targetID);
        let prodID:number = parseInt(targetID.substring(4))
        // console.log('id is: ', prodID)
        addProdCartID(prodID);

        let idname = `quant-cart-${prodID.toString()}`
        // console.log(idname)
        let ele = getByID(`quant-cart-${idname}`);
        // console.log(ele)
        getByID(`quant-cart-${prodID.toString()}`)!.innerHTML = getProdQuant(prodID).toString()
        getByID(`prod-total-${prodID}`)!.innerHTML = `$ ${getProdQuant(prodID) * getProdIDFromStor(prodID).price}`
        updateCartTotal();
        getByID(`prod-quant-${prodID}`)!.innerHTML = getProdQuant(prodID).toString()
        if (getProdQuant(prodID) == 0)
            window.location.reload();
    })
    
});


let decEle:HTMLCollectionOf<Element> = ele?.getElementsByClassName('dec-quant')!

// console.log(decEle)
let decArr = [].slice.call(decEle)

decArr.forEach((ele: Element) => {
    ele.addEventListener('click', (event) => {
        let targetID:string = (event.target as HTMLElement).id
        // console.log(targetID);
        let prodID:number = parseInt(targetID.substring(4))
        // console.log('id is: ', prodID)
        removeProdCartID(prodID);
        // console.log(getProdQuant(prodID))
        // console.log(getByID('quant-cart'))
        document.getElementById(`quant-cart-${prodID}`)!.innerHTML = getProdQuant(prodID).toString()
        getByID(`prod-total-${prodID}`)!.innerHTML = `$ ${getProdQuant(prodID) * getProdIDFromStor(prodID).price}`
        updateCartTotal()
        getByID(`prod-quant-${prodID}`)!.innerHTML = getProdQuant(prodID).toString()
        if (getProdQuant(prodID) == 0)
            window.location.reload();
    })
})

updateCartTotal()
function updateCartTotal():void{
    let ele = getByID('checkout')
    ele?.innerHTML = getCartTotal().toString()
}
console.log('cart ts is working at the end')