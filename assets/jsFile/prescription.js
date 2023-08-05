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

const prescriptionInput = document.getElementById('prescription');
const prescriptionPreview = document.getElementById('prescriptionPreview');
const errorMessage = document.getElementById('errorMessage');
const orderForm = document.getElementById('orderForm');

prescriptionInput.addEventListener('change', function () {
    const file = prescriptionInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const fileType = file.type.split('/')[0];
            if (fileType === 'image' || fileType === 'pdf') {
                errorMessage.textContent = '';
                prescriptionPreview.innerHTML = `
                            <strong>Preview:</strong><br>
                            ${fileType === 'image' ? `<img src="${e.target.result}" alt="Prescription">` : `PDF File`}
                        `;
            } else {
                prescriptionPreview.innerHTML = '';
                errorMessage.textContent = 'Invalid file format. Only images or PDF files are allowed.';
            }
        };
        reader.readAsDataURL(file);
    } else {
        prescriptionPreview.innerHTML = '';
    }
});

orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    orderForm.reset();
    prescriptionPreview.innerHTML = '';
});

update();