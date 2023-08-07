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

let feature = document.getElementById("feature");

let generateFeature = () => {
    return (feature.innerHTML = featureData.map((x) => {
        return `<a href="${x.link}">
        <div class="feature-box">
            <div class="feature-image">
                <img src="${x.img}" alt="">
            </div>
        </div>
    </a>`
    }).join(""));
};

generateFeature();

let category = document.getElementById("category-container");

let generateCategory = () => {
    return (category.innerHTML = categoryItems.map((x) => {
        return `<a href="${x.link}">
        <div class="items">
            <div class="item-image">
                <img src="${x.img}" alt="">
            </div>
            <div class="item-name">
                ${x.name}
            </div>
        </div>
    </a>`
    }).join(""));
};

generateCategory();
update();