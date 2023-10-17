import { CAROUSEL_SECTN } from './constants.js';
// const BODY_TAG = document.getElementsByTagName('body')[0]
CAROUSEL_SECTN.innerHTML += `
<div id="carouselExampleCaptions" class="carousel carousel-dark slide carousel-fade w-75 mx-auto bg-dark-subtle">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.bhphotovideo.com/bimages/BHUX-19191_Nikon_e_Homepage-top.png" class="d-block w-100" alt="..." height="578">
      <div class="carousel-caption d-none d-md-block">
        <h5>Latest Releases in Electronics</h5>
        <p>Find the newest, coolest tech available in the market for the most amazing, discounted prices.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwbeec1f68/homepage/HeroBanner/festive-desktop.jpg" class="d-block w-100" alt="..." height="578">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/oct-23/gtm-week1/6oct/20231006_Brands-D.jpg.transform/i1680x550/image.jpeg" class="d-block w-100" alt="..." height="578">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev pe-5 me-5" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next ps-5 ms-5" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;
