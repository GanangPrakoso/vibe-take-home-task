function fetchProduct() {
  const productData = [
    {
      product: "PRETINOL™ SERUM",
      price: "150.00",
      image: "./assets/product.png",
    },
    {
      product: "PRETINOL™ CREAM",
      price: "80.00",
      image: "./assets/product_1.png",
    },
    {
      product: "PRETINOL™ EYE CREAM",
      price: "100.00",
      image: "./assets/product_2.png",
    },
    {
      product: "PRETINOL™ CREAM",
      price: "50.00",
      image: "./assets/product_3.png",
    },
  ];
  let content = ``;
  for (let i = 0; i < productData.length; i++) {
    content += `
    <div class="product-container">
          <div
            style="position: relative; display: flex; justify-content: center"
          >
            <img src="${productData[i].image}" style="max-width: 80%" />
            <i
              class="far fa-heart"
              style="position: absolute; top: 0; right: 0"
            ></i>
          </div>
          <div class="product-name">${productData[i].product}</div>
          <div class="product-description">
            Safe and efficient Retinol anti-wrinkle serum targets wrinkle
            reduction and visibly improves skin's radiance and luminosity.
          </div>
          <div class="product-price">S$${productData[i].price}</div>
          <div class="button-carousel">
            <span>add to cart</span>
          </div>
        </div>
    `;
  }
  $("#exclusive-item-container").html(content);
}

function fetchCategory() {
  const categories = [
    {
      text: "GIFTS",
      image: "./assets/makeup.jpg",
    },
    {
      text: "MENS",
      image: "./assets/sixpack.jpg",
    },
    {
      text: "MEMBERSHIP",
      image: "./assets/category.jpg",
    },
  ];

  let content = ``;
  for (let i = 0; i < categories.length; i++) {
    content += `
    <div class="category-item-container">
          <div class="category-text">${categories[i].text}</div>
          <div
            class="category-image"
            style="
              background-image: url(${categories[i].image});
              background-position: center;
            "
          ></div>
        </div>
    `;
  }
  $("#category-section-container").html(content);
}

function fetchIgPics() {
  content = ``;

  for (let i = 0; i < 14; i++) {
    let instagramPic;
    if (i % 2 === 0) {
      instagramPic = `./assets/instagram_pic.jpg`;
    } else if (i % 3 === 0) {
      instagramPic = `./assets/instagram_pic_2.jpg`;
    } else {
      instagramPic = `./assets/instagram_pic_1.jpg`;
    }

    content += `
    <div class="instagram-pic" style="background-image: url(${instagramPic})"></div>
    `;
  }
  $("#instagram-pic-container").html(content);
}
// =========================================================================================

$(document).ready(() => {
  fetchProduct();
  fetchCategory();
  fetchIgPics();
});
