import { STAR_ICON } from "../static/constants.js";
// returning HTML for one single card
export function cardForProduct(product) {
    let truncatedTitle = product.title.substring(0, 35);
    let cardHTML = `
            <div class="card" style="min-width: 220px" >
                <div id="card-${product.id}" class="bubble">
                    
                    <div style="object-fit: contain">
                        <img src="${product.image}" class="card-img-top p-5" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-end">
                        <h5 class="card-title">${truncatedTitle}</h5>
                        </div>
                        
                        <a href="./product.html?id=${product.id}" class = ""> </a>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Price:</b> $${product.price}</li>
                        <li class="list-group-itemn d-flex justify-content-between p-4">
                            <div>
                            <b>Rating:</b> 
                            ${product.rating.rate} ${STAR_ICON}
                            </div>
                            <div>
                                [${product.rating.count}]
                            </div>
                            </li> 
                            <!-- change to two separate divs later on -->
                    </ul>
                </div>
                <div class="list-group-item text-center p-3"><button class="btn btn-primary cart-btn" id="${product.id}" >Add Cart</button></div>
            </div>
        `;
    return cardHTML;
}
// assigning event listeners to button for adding to card
// returning card content for Array of Products
export function cardForArrayProducts(arr) {
    let cardsHTML;
    arr.forEach((ele) => {
        cardsHTML += cardForProduct(ele);
    });
    return cardsHTML;
}
export function cardForCartProd(product) {
    let truncatedTitle = product.product.title.substring(0, 35);
    let cardHTML = `
            <div class="card" style="min-width: 220px" >
                <div style="object-fit: contain">
                    <img src="${product.product.image}" class="card-img-top p-5" alt="...">
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-end">
                    <h5 class="card-title">${truncatedTitle}</h5>
                    </div>
                    
                    <a href="./product.html?id=${product.product.id}" class = ""> </a>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Price:</b> $${product.product.price}</li>
                    <li class="list-group-itemn d-flex justify-content-between p-4">
                    <div>
                        <b>Rating:</b> 
                        ${product.product.rating.rate} ${STAR_ICON}
                    </div>
                    <div>
                        [${product.product.rating.count}]
                    </div>
                    </li> 
                    <!-- change to two separate divs later on -->
                    <li class="list-group-item"><b>Product Quantity:</b> <span id="prod-quant-${product.product.id}">${product.quantity}</span></li>
                    <li class="list-group-item"><b>Product Cart Amount:</b> <span id="prod-total-${product.product.id}" > ${product.quantity * product.product.price} </span></li>
                    <li class="list-group-item"> 
                        <div class="quant-toggles d-flex justify-content-around gap-5" id = "${product.product.id}">
                            <button type="button" class="btn btn-primary inc-quant" id="inc-${product.product.id}">+</button>
                            <p id="quant-cart-${product.product.id}">${product.quantity}</p>
                            <button type="button" class="btn btn-danger dec-quant" id="dec-${product.product.id}" >-</button>
                        </div>
                    </li>
                </ul>
            </div>
        `;
    return cardHTML;
}
export function cardForArrayCart(arr) {
    let cardsHTML = '';
    arr.forEach((ele) => {
        cardsHTML += cardForCartProd(ele);
    });
    return cardsHTML;
}
