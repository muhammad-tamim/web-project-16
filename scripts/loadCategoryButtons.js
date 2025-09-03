// Load category buttons

fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => {
        categoryData(data.categories)
    })

function categoryData(AllData) {
    for (let data of AllData) {

        const buttonsContainer = document.getElementById("buttons-container");

        buttonsContainer.innerHTML += `
        <button id="${data.category_id}" class="font-medium text-primary-content/70 py-2 px-5 rounded-[4px] bg-[#252525]/15 cursor-pointer 
        hover:bg-primary hover:text-white hover:font-semibold">${data.category}</button>
        `
    }
}

