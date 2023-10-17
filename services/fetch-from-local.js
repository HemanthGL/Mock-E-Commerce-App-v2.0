var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchAllDataFromAPI } from "./fetch-from-API.js";
// get all stored product contents
export function getAllProdFromStor() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = localStorage.getItem('products');
        if (data == null) {
            let apiData = yield fetchAllDataFromAPI();
            let stringified = JSON.stringify(apiData);
            localStorage.setItem('products', stringified);
            return apiData;
        }
        else {
            return JSON.parse(data);
        }
    });
}
// get all products in a category
export function getProdCategFromStor(categ) {
    let data = JSON.parse(localStorage.getItem('products'));
    let res;
    data.data.forEach((ele) => {
        ele.category == categ ? res.push(ele) : {};
    });
    return res;
}
// get specific product id from stored localStorage
export function getProdIDFromStor(id) {
    let data = JSON.parse(localStorage.getItem('products'));
    let product;
    data.every((ele) => {
        if (ele.id == id) {
            product = ele;
            return false;
        }
        return true;
    });
    return product;
}
