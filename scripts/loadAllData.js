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
            console.log(data)

            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                <figure>
                    <img class="rounded-lg w-[312px]"
                        src="${data.thumbnail}" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <div class="flex gap-3">
                        <div class="avatar">
                            <div class="rounded-full size-10">
                                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <h3 class="font-bold text-base text-primary-content">Building a Winning UX Strategy Usin g
                                the
                                Kano
                                Model</h3>
                            <p class="flex items-center gap-2 text-sm text-primary-content/70">Awlad
                                Hossain<span><img class="size-5" src="assets/images/icons8-verified-48.png"
                                        alt=""></span></p>
                            <p class="text-sm text-primary-content/70"><span>91K</span> Views</p>
                        </div>
                    </div>
                </div>
        `
            container.appendChild(div)
        }

    })

}

