// get contents of cart
export function getCartContent() {
    let data = localStorage.getItem('cart');
    if (data == null) {
        return [];
    }
    return JSON.parse(data);
}
// retrieve only Array of products in the cart
export function getProductsArrCart() {
    let cartContent = getCartContent();
    if (cartContent != null && cartContent != undefined && cartContent.length > 0) {
        let products = [];
        console.log(cartContent);
        cartContent.forEach((ele) => {
            if (ele == undefined)
                console.log('undefine over here');
            console.log(ele);
            let product = ele.product;
            products.push(product);
        });
        return products;
    }
    console.log('cart empty');
    return [];
}
// add one product to cart
export function addProdCart(product) {
    let data = localStorage.getItem('cart');
    if (data == null) {
        let prodObj = [{
                product: product,
                quantity: 1
            }];
        let storData = JSON.stringify(prodObj);
        localStorage.setItem('cart', storData);
        return;
    }
    let parsedArr = JSON.parse(data);
    let flg = 0;
    parsedArr.every((ele) => {
        if (ele.product.id == product.id) {
            ele.quantity++;
            flg = 1;
            return false;
        }
        return true;
    });
    if (flg == 0) {
        parsedArr.push({
            product: product,
            quantity: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(parsedArr));
}
// add product to cart with Product ID
export function addProdCartID(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    let idx = products.findIndex((ele) => ele.id == id);
    if (idx > -1) {
        addProdCart(products[idx]);
    }
}
// remove one quant product from card
export function removeOneProdCart(product) {
    let data = localStorage.getItem('cart');
    if (data != null) {
        let parsedArr = JSON.parse(data);
        let idx = parsedArr.findIndex((ele) => ele == product);
        if (parsedArr[idx].quantity == 1) {
            // parsedArr.splice(idx, 1);
            removeProductCart(product);
        }
        else if (idx > -1) {
            parsedArr[idx].quantity--;
        }
    }
}
// remove product from cart
export function removeProductCart(product) {
    let data = localStorage.getItem('cart');
    if (data != null) {
        let parsedArr = JSON.parse(data);
        let idx = parsedArr.findIndex((ele) => ele == product);
        if (idx > -1) {
            parsedArr.splice(idx, 1);
        }
    }
}
// Cart [Structure]: Array of Objects { product_id, quantity }
// get product of id from cart
export function getProductFromIDCart(id) {
    let data = localStorage.getItem('cart');
    if (data != null) {
        let parsedArr = JSON.parse(data);
        let idx = parsedArr.findIndex((ele) => ele.id == id);
        if (idx > -1) {
            return parsedArr[idx];
        }
    }
    return null;
}
