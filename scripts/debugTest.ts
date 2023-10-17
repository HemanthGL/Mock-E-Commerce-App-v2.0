import { fetchAllDataFromAPI, fetchProductDataFromAPI } from '../services/fetch-from-API.js'
import { Prod } from '../static/interfaces.js'
import { FETCH_UNDEFINED } from '../static/constants.js';
// import { BODY_TAG } from '../static/constants'

async function getData():Promise<void>{
    let res! : Prod | null;
    try{
        res = await fetchProductDataFromAPI(1);

        if (res == undefined){
            console.log('result is undefined')
            console.log(res)
        }else{
            console.log('res here is')
            console.log(res)
            console.log(typeof(res))
        }
    }catch(err){
        console.log(err);
    }
    // console.log(res[0])
    
    // if (res == undefined){
    //     console.error(FETCH_UNDEFINED)
    //     return;
    // }
    // printData(res);
    
    // return res;
}

function printData(data: Array<Prod>){
    console.log('inside getData method')
    console.log(data);
    console.log(typeof(data))
}

getData()