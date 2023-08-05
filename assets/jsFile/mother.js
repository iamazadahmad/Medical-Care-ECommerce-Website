let footer = document.getElementById("footer-element");

let generateFooter = () => {
    return (footer.innerHTML = footerElement.map((x) => {
        return `<div class="column" id="column">
        <h4>${x.name}</h4>
        <a href="${x.link1}">${x.element1}</a>
        <a href="${x.link2}">${x.element2}</a>
        <a href="${x.link3}">${x.element3}</a>
        <a href="${x.link4}">${x.element4}</a>
        <a href="${x.link5}">${x.element5}</a>
    </div>`
    }).join(""));
};

generateFooter();

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const imageWidth = carouselImages[0].clientWidth;

let slideCount = 0;

function startCarousel() {
    setInterval(() => {
        slideCount++;
        carouselSlide.style.transition = "transform 1s ease-in-out";
        carouselSlide.style.transform = `translateX(-${imageWidth * slideCount}px)`;
        if (slideCount === carouselImages.length - 1) {
            setTimeout(() => {
                carouselSlide.style.transition = "none";
                carouselSlide.style.transform = "translateX(0)";
                slideCount = 0;
            }, 1000);
        }
    }, 1000);
}

startCarousel();

let mother = document.getElementById("container");

let generateMother = () => {
    return (mother.innerHTML = motherItems.map((x) => {
        return `<a href="">
        <div class="product-container" id="${x.id}">
            <div class="product-image">
                <img src="${x.img}" alt="">
            </div>
            <div class="product-name">
                <h4>${x.name}</h4>
            </div>
            <div class="price-add">
                <div class="price">Rs. ${x.price}</div>
                <div><span class="add-to-cart">${addButton(x.id) ? "ADD" : "Added"}</span></div>
            </div>
        </div>
    </a>`
    }).join(""));
};

generateMother();

let singleProductPage = (id) => {
    let selectedItem = id;
    let search = motherItems.find((x) => x.id === selectedItem);
    singleProductDetail[0] = (
        {
            category: search.category,
            id: search.id,
            name: search.name,
            img: search.img,
            price: search.price,
        }
    );
    localStorage.setItem('singleProductData', JSON.stringify(singleProductDetail));
    window.location.assign('singleProduct.html');
};

let singleProduct = document.querySelectorAll(".product-container");
singleProduct.forEach((div) => {
    div.addEventListener("click", (event) => {
        event.preventDefault();
        const productContainer = event.target.closest(".product-container");
        const singleProduct = event.target;
        const productId = productContainer.id;
        singleProductPage(productId);
    });
});

let cartPageDetail = (id) => {
    let selectedItem = id;
    let search = motherItems.find((x) => x.id === selectedItem);
    basket.push(
        {
            category: search.category,
            id: search.id,
            name: search.name,
            img: search.img,
            price: search.price,
        }
    );
    localStorage.setItem("cartData", JSON.stringify(basket));
    update();
};

let addToCart = document.querySelectorAll(".add-to-cart");
addToCart.forEach((div) => {
    div.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const productContainer = event.target.closest(".product-container");
        const addToCartDiv = event.target;
        const productId = productContainer.id;
        if (check(productId)) {
            addToCartDiv.innerHTML = "Added";
            cartPageDetail(productId);
        }
    });
});

let check = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined)
        return true;
    else {

        return false;
    }
};

update();