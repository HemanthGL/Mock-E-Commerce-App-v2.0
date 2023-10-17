var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchProductDataFromAPI } from '../services/fetch-from-API.js';
// import { BODY_TAG } from '../static/constants'
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        let res;
        try {
            res = yield fetchProductDataFromAPI(1);
            if (res == undefined) {
                console.log('result is undefined');
                console.log(res);
            }
            else {
                console.log('res here is');
                console.log(res);
                console.log(typeof (res));
            }
        }
        catch (err) {
            console.log(err);
        }
        // console.log(res[0])
        // if (res == undefined){
        //     console.error(FETCH_UNDEFINED)
        //     return;
        // }
        // printData(res);
        // return res;
    });
}
function printData(data) {
    console.log('inside getData method');
    console.log(data);
    console.log(typeof (data));
}
getData();
