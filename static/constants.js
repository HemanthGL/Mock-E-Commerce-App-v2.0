export const BODY_TAG = document.getElementsByTagName('body')[0];
export const CAROUSEL_SECTN = document.getElementById('carousel-section');
export const API_URL = 'https://fakestoreapi.com/products';
export const API_CATEG_URL = 'https://fakestoreapi.com/products/categories';
export const API_CALL_FAIL_ALL = 'Error in fetching from API: ALL Products';
export const FETCH_UNDEFINED = 'Fetch Call returned as Undefined';
export const API_CALL_PROD_ID_FAIL = 'API call for specific Prod ID failed';
export const API_CALL_CATEG_FAIL = 'API call for Category failed';
export const STAR_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>';
export const getByID = ((str) => document.getElementById(str));
export const SORT_DROPDOWN = `
    <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort & Filter
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li id="no-sort" class='ps-3'>None</li>
                <li><hr class="dropdown-divider"></li>
                <li id="price-l-h"><a class="dropdown-item" href="#">by Price [Low to High]</a></li>
                <li id="price-h-l"><a class="dropdown-item" href="#">by Price [High to Low]</a></li>
                <li><hr class="dropdown-divider"></li>
                <li id="rating-sort"><a class="dropdown-item" href="#">by Rating</a></li>
                <li id="review-count"><a class="dropdown-item" href="#">by No. of Reviews</a></li>
            </ul>
        </div>

`;
