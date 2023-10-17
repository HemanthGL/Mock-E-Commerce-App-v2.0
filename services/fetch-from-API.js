var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { API_URL, API_CALL_FAIL_ALL, API_CALL_PROD_ID_FAIL, API_CALL_CATEG_FAIL } from "../static/constants.js";
// fetch from API: All Products
function fetchAllDataFromAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        let respData;
        try {
            let resp = yield fetch(API_URL);
            respData = yield resp.json();
            return respData;
        }
        catch (e) {
            console.error(e);
            console.error(API_CALL_FAIL_ALL);
            return [];
        }
    });
}
export { fetchAllDataFromAPI };
// fetch specific Product: with ID
function fetchProductDataFromAPI(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = null;
        try {
            let resp = yield fetch(`${API_URL}/${id}`);
            data = yield resp.json();
            return data;
        }
        catch (e) {
            console.error(e);
            console.error(API_CALL_PROD_ID_FAIL);
            return data;
        }
    });
}
export { fetchProductDataFromAPI };
// fetch category specific data
function fetchCategoryDataFromAPI(categ) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        try {
            let resp = yield fetch(`${API_URL}/categories/${categ}`);
            data = yield resp.json();
            return data;
        }
        catch (e) {
            console.error(e);
            console.error(API_CALL_CATEG_FAIL);
            return [];
        }
    });
}
