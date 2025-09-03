function loadVideoCategoryButtons() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => {
            displayVideoCategoryButtons(data.categories)
        })
}
loadVideoCategoryButtons()

function displayVideoCategoryButtons(categoriesData) {

    const categoryButtonsContainer = document.getElementById("category-buttons-container");

    for (let data of categoriesData) {
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick="displayCategoryVideoById(${data.category_id})" id="${data.category_id}"
            class="font-medium text-primary-content/70 py-2 px-5 rounded-[4px] bg-[#252525]/15 cursor-pointer hover:bg-primary
            hover:text-white hover:font-semibold">${data.category}</button>
        `
        categoryButtonsContainer.appendChild(div);

    }
}


function loadAllVideoData() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => {
            displayAllVideoDataThroughCards(data.videos)
        })
}
loadAllVideoData();

function displayAllVideoDataThroughCards(allVideoData) {

    showOrHideErrorMessage("show")

    document.getElementById("display-all-video-btn").addEventListener("click", () => {
        showVideoOnCards(allVideoData)
        showOrHideErrorMessage("hide")
    })
}


function displayCategoryVideoById(id) {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showVideoOnCards(data.category)
        })

}