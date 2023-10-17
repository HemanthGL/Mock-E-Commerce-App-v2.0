import { API_URL, API_CALL_FAIL_ALL, API_CALL_PROD_ID_FAIL, API_CALL_CATEG_FAIL } from "../static/constants.js";
import { Prod } from "../static/interfaces";

// fetch from API: All Products
async function fetchAllDataFromAPI() : Promise<Prod[]>{

    let respData: Array<Prod>;
    try{
        let resp = await fetch(API_URL);
        respData = await resp.json()
        
        return respData;
    } catch (e) {
        console.error(e);
        console.error(API_CALL_FAIL_ALL);
        return [];
    }
    
}

export { fetchAllDataFromAPI };

// fetch specific Product: with ID
async function fetchProductDataFromAPI(id: number) : Promise<Prod | null>{
    let data: Prod | null = null;
    try{
        let resp = await fetch(`${API_URL}/${id}`)
        data = await resp.json();

        return data;
    } catch (e) {
        console.error(e);
        console.error(API_CALL_PROD_ID_FAIL)
        return data;
    }   
}

export { fetchProductDataFromAPI }

// fetch category specific data
async function fetchCategoryDataFromAPI(categ: string) : Promise<Array<Prod>>{
    let data : Array<Prod>;
    try{
        let resp = await fetch(`${API_URL}/categories/${categ}`)
        data = await resp.json()
        
        return data;
    } catch (e) {
        console.error(e);
        console.error(API_CALL_CATEG_FAIL)
        
        return [];
    }
}
