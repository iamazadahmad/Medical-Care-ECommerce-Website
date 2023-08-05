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

let singleProduct = document.getElementById("single-product");

let generateSingleProduct = () => {
    return (singleProduct.innerHTML = `<div class="image" id="image">
    <img src="${singleProductDetail[0].img}" alt="image">
</div>
<div class="detail" id="detail">
    <div class="product-name">
        <h1>${singleProductDetail[0].name}</h1>
    </div>
    <div class="price-add">
        <div class="price">Rs. ${singleProductDetail[0].price}</div>
        <div><span class="add-to-cart">${addButton(singleProductDetail[0].id) ? "ADD" : "Added"}</span></div>
    </div>
    <div class="condtion">
        <span>Inclusive of all taxes</span>
        <br>
        <span>Delivery by Tomorrow, before 10:00 pm</span>
    </div>
</div>`
    );
};

generateSingleProduct();
update();

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
        event.preventDefault();
        const addToCartDiv = event.target;
        productId = singleProductDetail[0].id;
        if (check(productId)) {
            addToCartDiv.innerHTML = "Added";
            cartPageDetail(productId);
        }
    }
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

let cartPageDetail = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);
    if (search === undefined) {
        basket.push(
            {
                category: singleProductDetail[0].category,
                id: singleProductDetail[0].id,
                name: singleProductDetail[0].name,
                img: singleProductDetail[0].img,
                price: singleProductDetail[0].price,
            }
        );
    }
    localStorage.setItem("cartData", JSON.stringify(basket));
    update();
};