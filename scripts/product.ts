import { addProdCartID, getProdQuant, removeProdCartID } from "../services/cart-add-retrieval.js";
import { getProdIDFromStor } from "../services/fetch-from-local.js"
import { getByID } from "../static/constants.js";
import { Prod } from "../static/interfaces"

let searchParams = new URLSearchParams(window.location.search)

let id: number = parseInt(searchParams.get('id')!)

console.log(id, ' is the id over here')

let prodData: Prod =  getProdIDFromStor(id);

let quant: number = getProdQuant(id);

let prodHTML: string = `
<header id="categ-header" class="mt-5 ms-4 me-5 mb-4"><b>Category: </b>${prodData.category} > ${prodData.title.substring(0,45)}</header>

    <div id="product-container" class="container-fluid mb-5 mt-4 d-flex flex-column justify-content-center align-items-center">
        <div id="img-container" class="container-fluid d-flex justify-content-center mb-5" style="object-fit: contain;">
            <img src="${prodData.image}" alt="" width="300">
        </div>
        <div id="product-details" class="container-fluid text-align-center">
            <div id="product-title" class="display-6 text-center mb-4">
                ${prodData.title}
            </div>
            <div id="product-description" class="lead h4 text-center mt-2">
                ${prodData.description}
            </div>
            <div id="rating" class=" w-25 mx-auto text-center mb-5 mt-5 d-flex justify-content-around">
                <div class="rating-given lead">Rating: ${prodData.rating.rate}</div>
                <div class="rating-count lead">[${prodData.rating.count}]</div>
            </div>
            <div id="price" class="h2 mt-5 fw-bolder text-center">
                Price: $${prodData.price}
            </div>
            <div id="${prodData.id}" class="cart-btns d-flex justify-content-center gap-5 mt-5"> <!-- put product id here -->
                <div class="label lead">
                    Add to Cart: 
                </div>

                <div class="quant-toggles d-flex justify-content-around gap-5">
                    <button type="button" class="btn btn-primary" id='inc-quant' >+</button>
                    <p id="quant-cart">${quant}</p>
                    <button type="button" class="btn btn-danger" id='dec-quant' >-</button>
                </div>
            </div>
        </div>
    </div>
`

getByID('content')!.innerHTML = prodHTML



function increaseQuant(id: number){
    addProdCartID(id);
    quant++
    loadQuantInPage();
}

function decreaseQuant(id: number){
    removeProdCartID(id);
    if (quant > 0){
        quant--;
        loadQuantInPage();
    }
}

getByID('inc-quant')?.addEventListener('click', () =>  increaseQuant(id))
getByID('dec-quant')?.addEventListener('click', () => decreaseQuant(id))

function loadQuantInPage(){
    let quantEle = getByID('quant-cart')
    quantEle?.innerHTML = quant.toString()
}