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

let cart = document.getElementById("cart-page");
let totalPrice = document.getElementById("total-price");

let calculation = () => {
    let totalAmount = 0;
    if (basket.length != 0) {
        basket.map((x) => {
            totalAmount = totalAmount + x.price;
        });
    }
    return totalAmount;
};

let generateTotalPrice = () => {
    if(basket.length != 0) {
        return (totalPrice.innerHTML = `<h1>Total Price: ${calculation()}</h1>`);
    }
    else {
        return (totalPrice.innerHTML = ``);
    }
}
let generateCart = () => {
    if (basket.length != 0) {
        return (cart.innerHTML = basket.map((x) => {
            return `<div class="cart-item single-product" id="cart-item">
        <div class="image" id="image">
        <img src="${x.img}" alt="image">
    </div>
    <div class="detail" id="detail">
        <div class="product-name">
            <h1>${x.name}</h1>
        </div>
        <div class="price-add">
            <div class="price">Rs. ${x.price}</div>
        </div>
        <div class="condtion">
            <span>Inclusive of all taxes</span>
            <br>
            <span>Delivery by Tomorrow, before 10:00 pm</span>
        </div>
    </div>
    <div class="remove" id="remove">
        <i class="fa-solid fa-trash"></i>
    </div>
    </div>`
        }).join(""));
    }
    else {
        cart.innerHTML = "<br><h1>Your Cart Is Empty</h1><br>";
    }
};

generateCart();
generateTotalPrice();
update();

const attachRemoveListeners = () => {
    const removeIcons = document.querySelectorAll(".remove i");
    removeIcons.forEach((icon) => {
        icon.addEventListener("click", (event) => {
            const indexToRemove = event.target.getAttribute("data-index");
            basket.splice(indexToRemove, 1);
            generateCart();
            update();
            localStorage.setItem("cartData", JSON.stringify(basket));
            generateTotalPrice();
            attachRemoveListeners();
        });
    });
};

attachRemoveListeners();