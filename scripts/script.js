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
        <button id="${data.category_id}"
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

    document.getElementById("display-all-video-btn").addEventListener("click", () => {
        const videoCardsContainer = document.getElementById("video-cards-container")

        for (let data of allVideoData) {

            const showFormatDate = formatDate(data.others.posted_date)

            const div = document.createElement("div");
            div.innerHTML = `
            <div class="card">
                <figure class="relative">
                    <img class="rounded-lg w-[312px] h-[200px]"
                        src="${data.thumbnail}" alt="Shoes" />
                    <span
                        class="absolute text-xs right-10 bottom-3 rounded-md bg-primary-content py-1 px-[5px] text-white">
                        ${showFormatDate}
                    </span>
                </figure>
                <div class="card-body">
                    <div class="flex gap-3">
                        <div class="avatar">
                            <div class="rounded-full size-10">
                                <img src="${data.authors[0].profile_picture}" />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <h3 class="font-bold text-base text-primary-content">${data.title}</h3>
                            <p class="flex items-center gap-2 text-sm text-primary-content/70">
                            ${data.authors[0].profile_name}
                            ${data.authors[0].verified
                    ? `<img class="size-5" src="assets/images/icons8-verified-48.png"
                            alt="">`
                    : ""} 
                            </p> 
                            <p class="text-sm text-primary-content/70"><span>${data.others.views}</span> Views</p>
                        </div >
                    </div >
                </div >
            </div >
                `
            videoCardsContainer.appendChild(div);
        }
    })
}