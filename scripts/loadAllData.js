fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => {
        loadAllData(data.videos)
    })



errorMessageShowOrHide("show")

function loadAllData(allData) {
    document.getElementById("all-btn").addEventListener("click", () => {

        errorMessageShowOrHide("hide");
        const container = document.getElementById("category-card-container");

        for (data of allData) {

            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                <figure class="relative">
                    <img class="rounded-lg w-[312px] h-[200px] "
                        src="${data.thumbnail}" alt="Shoes" />
                        <span class="absolute text-xs right-10 bottom-3 rounded-md bg-primary-content py-1 px-[5px] text-white">
                        ${formatDate(data.others.posted_date)}
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
                    ? `<img class="size-5" src="assets/images/icons8-verified-48.png" alt="Verified">`
                    : ""
                }
  </p>
  <p class="text-sm text-primary-content/70"><span>${data.others.views}</span> Views</p>
</div>

                    </div>
                </div>
        `
            container.appendChild(div)
        }

    })

}

