// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}

// Function to dynamically create HTML elements from the JSON file
function createCardsFromJSON(jsonUrl, containerSelector, HTMLinjection) {
    const container = document.querySelector(containerSelector);
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch(jsonUrl)
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4", "text-dark");
                
                // HTML injection to create HTML elements
                card.innerHTML = HTMLinjection(item);

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        })
        .catch(error => console.error(`Erreur réseau sur ${jsonUrl} :`, error));
}

// Call function navbar collapse
handleNavbarCollapse();

// Call function skills
createCardsFromJSON("data/skills.json", "#skills .container", (item) => `
    <div class="card skillsText">
        <div class="card-body">
            <img src="../images/${item.image}" alt="${item.title}"/>
            <h3 class="card-title mt-3">${item.title}</h3>
            <p class="card-text mt-3">${item.text}</p>
        </div>
    </div>
`);

// Call function portfolio
createCardsFromJSON("data/portfolio.json", "#portfolio .container", (item) => `
    <div class="card portfolioContent">
        <img class="card-img-top" src="../images/${item.image}" alt="${item.title}" style="width:100%">
        <div class="card-body">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-text">${item.text}</p>
            <div class="text-center">
                <a href="${item.link}" class="btn btn-outline-dark" target="_blank">GitHub de Bug Buster</a>
            </div>
        </div>
    </div>
`);