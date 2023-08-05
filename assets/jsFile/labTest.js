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

const labTestForm = document.getElementById('labTestForm');

labTestForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Lab test booked successfully!');
    labTestForm.reset();
});

update();