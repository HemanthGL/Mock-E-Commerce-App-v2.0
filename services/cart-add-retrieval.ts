import { getByID } from "../static/constants.js"
import { Prod, StoredProd } from "../static/interfaces.js"

// get contents of cart

export function getCartContent(): Array<StoredProd> {
    
    let data = localStorage.getItem('cart')
    
    if (data == null){
        return [];
    }

    return JSON.parse(data);
}

// retrieve only Array of products in the cart
export function getProductsArrCart(): Array<Prod> {
    let cartContent: Array<StoredProd> = getCartContent()

    if (cartContent != null && cartContent != undefined && cartContent.length > 0){
        let products: Array<Prod> = [];
        
        console.log(cartContent);
        cartContent.forEach((ele: StoredProd) => {
            if (ele == undefined)
                console.log('undefine over here')
            console.log(ele)
            let product: Prod = ele.product
            products.push(product);
        });
        return products!;
    }

    console.log('cart empty')
    return [];
}

// add one product to cart
export function addProdCart(product: Prod): void {
    
    let data = localStorage.getItem('cart')

    if (data == null){
        let prodObj = [{
            product: product,
            quantity: 1
        }]

        let storData = JSON.stringify(prodObj);
        localStorage.setItem('cart', storData);
        return;
    }
    
    let parsedArr = JSON.parse(data)
    let flg = 0;

    parsedArr.every((ele: StoredProd) => {
        if (ele.product.id == product.id){
            ele.quantity++;
            flg = 1;
            return false;
        }
        return true;
    })

    if (flg == 0){
        parsedArr.push({
            product: product,
            quantity: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(parsedArr))
}

// add product to cart with Product ID

export function addProdCartID(id: number): void {
    let products = JSON.parse(localStorage.getItem('products')!)

    let idx = products.findIndex((ele: Prod) => ele.id == id)

    if (idx > -1){
        addProdCart(products[idx]);
    }

}

// remove one quant product from card

export function removeOneProdCart(product: Prod): void {

    let data = localStorage.getItem('cart')

    if (data != null){
        let parsedArr = JSON.parse(data)

        let idx = parsedArr.findIndex((ele: Prod) => ele == product);

        if (parsedArr[idx].quantity == 1){
            // parsedArr.splice(idx, 1);
            removeProductCart(product);
        } else if (idx > -1) {
            parsedArr[idx].quantity--;
        }
    }
}

// remove product from cart

export function removeProductCart(product: Prod): void{
    let data = localStorage.getItem('cart')

    if (data != null){
        let parsedArr = JSON.parse(data)

        let idx = parsedArr.findIndex((ele: Prod) => ele == product)

        if (idx > -1){
            parsedArr.splice(idx, 1);
        }
    }
}



// Cart [Structure]: Array of Objects { product_id, quantity }

// get product of id from cart

export function getProductFromIDCart(id: number): Prod | null {

    let data = localStorage.getItem('cart');

    if (data != null){
        let parsedArr = JSON.parse(data);

        let idx = parsedArr.findIndex((ele: Prod) => ele.id == id)

        if (idx > -1){
            return parsedArr[idx];
        }
    }

    return null
}