const BODY_TAG = document.getElementsByTagName('body')[0];
console.log('testing nav ts file vala 2');
BODY_TAG.innerHTML = `
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <div class="bg-dark">
                    <a href="/"> 
                        <svg aria-label="BestBuy.com" class="block" height="40" role="img" width="68" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 92"><path d="M127.6 66.66h31.33v25.09h-31.34l-7.8-7.34V74.06l7.81-7.4z" fill="#fff200"></path><path d="M126.03 79.19c0 .86-.69 1.55-1.55 1.55-.86 0-1.55-.69-1.55-1.55 0-.86.69-1.55 1.55-1.55.85 0 1.55.7 1.55 1.55z" fill="#1d252c"></path><path d="M127.2 57.76c0-1.17.94-2.12 2.12-2.12 1.2 0 2.12.94 2.12 2.11 0 1.19-.93 2.11-2.12 2.11-1.17 0-2.12-.9-2.12-2.1zm3.96-.01c0-1.07-.78-1.85-1.84-1.85-1.05 0-1.83.79-1.83 1.86 0 1.08.81 1.84 1.83 1.84 1.04 0 1.84-.77 1.84-1.85zm-2.55-1.13h.71c.48 0 .79.21.79.64v.01c0 .33-.21.51-.51.57l.64.97h-.35l-.61-.92h-.33v.92h-.33l-.01-2.19zm.72 1.03c.31 0 .46-.12.46-.37v-.01c0-.28-.16-.37-.46-.37h-.38v.75h.38zM30.21 19.81l.61-.22c5.92-3.18 6.93-11.05 1.16-15.36-2.58-2.06-6.09-3.09-10.55-3.09H2.1v39.61h20.47c5.25 0 16.12-.98 16.12-11.33-.01-7.91-8.29-9.54-8.48-9.61zM14.9 10.42h4.72c1.74-.04 3.23 1.18 3.21 2.9.02 1.73-1.48 2.94-3.21 2.9H14.9v-5.8zm8.82 20.12c-.74.7-1.67 1.04-2.78 1.04H14.9v-7.11h6.03c3.28-.18 5.27 3.8 2.79 6.07zM40.39 63.65l.61-.22c5.92-3.18 6.93-11.05 1.16-15.36-2.58-2.06-6.1-3.09-10.55-3.09h-19.3v39.61h20.43c5.25 0 16.12-.98 16.12-11.33 0-7.91-8.28-9.53-8.47-9.61zm-15.27-9.39h4.68c1.74-.04 3.23 1.18 3.22 2.9.01 1.73-1.48 2.94-3.22 2.9h-4.68v-5.8zm8.78 20.13c-.74.7-1.67 1.04-2.78 1.04h-6v-7.11h6c3.27-.18 5.26 3.8 2.78 6.07zM71.48 31.13H52.33v-6.21h15.63v-9.06H52.33v-5.08h19.19V1.13h-32v39.61h31.96v-9.61zM104.23 1.13v9.64h10.47v29.97h12.73V10.77h10.47V1.13h-33.67z" fill="#fff"></path><path d="M89.75 30.5c-2.8 2.33-8.08-.25-10.16-2.38l-7.56 7.18.48.48c6.71 6.62 20.86 8.59 27.98 2.21 5.84-4.61 6.03-14.52-.04-18.59-2.29-1.46-5.4-2.86-7.97-3.52-1.31-.3-2.64-.73-3.53-1.25-2.85-1.53-.43-4.43 2.13-4.16 2.59 0 4.17 1.16 4.99 2l7.58-7.2-.14-.16C97.4-.99 84.27-1.92 77.89 3.77c-2.9 2.51-4.35 5.47-4.35 8.85-.16 8.34 7.15 11.23 13.83 13.19 1.42.6 3.28.97 3.44 2.47-.01.87-.36 1.61-1.06 2.22zM71.52 68.52c-.19 6.29-9.33 6.29-9.52 0V44.99H49.18v22.93c-.03 9.76 8.2 17.54 17.92 17.12 9.46 0 17.12-7.66 17.12-17.12V45h-12.7v23.52zM106.13 58.47 97.73 45H84.89l14.83 25.47v14.14h12.81V70.46L127.36 45h-12.84l-8.39 13.47z" fill="#fff"></path></svg>
                    </a>
                </div>
            </a>

            <div class="menu-toggle">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
            </div>

            

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Shop By Category
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="./Men-Clothing.html">Men's Clothing</a></li>
                            <li><a class="dropdown-item" href="./Women-Clothing.html">Women's Clothing</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="./Electronics.html">Electronics</a></li>
                            <li><a class="dropdown-item" href="./Jewellery.html">Jewelery</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                                </svg>
                                WishList
                            </span>
                        </a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link active" href="./cart.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            Cart
                        </a>
                    </li>
                
                </ul>
            </div>
        </div>
    </nav>
`;
