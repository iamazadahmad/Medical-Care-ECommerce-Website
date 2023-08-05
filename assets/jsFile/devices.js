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

let devices = document.getElementById("container");

let generateDevices = () => {
    return (devices.innerHTML = devicesItems.map((x) => {
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

generateDevices();

let singleProductPage = (id) => {
    let selectedItem = id;
    let search = devicesItems.find((x) => x.id === selectedItem);
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
    let search = devicesItems.find((x) => x.id === selectedItem);
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