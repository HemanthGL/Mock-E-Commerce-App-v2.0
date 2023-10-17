import { STAR_ICON } from "../static/constants.js";
// returning HTML for one single card
export function cardForProduct(product) {
    let truncatedTitle = product.title.substring(0, 35);
    let cardHTML = `
            <div class="card" style="min-width: 220px" >
                <img src="${product.image}" class="card-img-top p-5" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${truncatedTitle}</h5>
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
                    <li class="list-group-item text-center p-3"><button class="btn btn-primary cart-btn" id="${product.id}" >Add Cart</button></li>
                </ul>
            </div>
        `;
    return cardHTML;
}
// returning card content for Array of Products
export function cardForArrayProducts(arr) {
    let cardsHTML;
    arr.forEach((ele) => {
        cardsHTML += cardForProduct(ele);
    });
    return cardsHTML;
}
