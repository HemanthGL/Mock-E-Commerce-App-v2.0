import { Prod } from "../static/interfaces";
import { fetchAllDataFromAPI } from "./fetch-from-API.js";

// get all stored product contents
export async function getAllProdFromStor():Promise<Array<Prod>> {
    let data = localStorage.getItem('products')

    if (data == null){
        let apiData = await fetchAllDataFromAPI()
        let stringified = JSON.stringify(apiData)
        localStorage.setItem('products', stringified); 

        return apiData;
    } else {
        return JSON.parse(data);
    }
}

// get all products in a category
export function getProdCategFromStor(categ: string) : Array<Prod> {
    let data = JSON.parse(localStorage.getItem('products')!)
    let res: Array<Prod> = [];

    data.forEach((ele: Prod)  => {
        ele.category == categ ? res.push(ele) : {};
    });

    return res!;
}

// get specific product id from stored localStorage
export function getProdIDFromStor(id: number) : Prod {
    let data = JSON.parse(localStorage.getItem('products')!)
    let product: Prod;

    data.every((ele : Prod) => {
        if (ele.id == id){
            product = ele;
            return false;
        }
        return true;
    });

    return product!;
}
