function formatDate(date) {
    if (!date) return "";

    const num = Number(date);

    // Unix timestamp that count in seconds
    if (date.length === 10) {
        return new Date(num * 10000).toDateString();
        // converts seconds into milliseconds then convert it into a date
    }

    // Days since Jan 1, 1970
    if (num < 100000) {
        return new Date(num * 24 * 60 * 60 * 1000).toDateString();
        // convert days into milliseconds (days * hours * minutes * seconds * milliseconds )
    }


    // assume the data have already in milliseconds format
    return new Date(num).toDateString()
}


function showOrHideErrorMessage(value) {
    if (value === "show") {
        document.getElementById("error-message").classList.remove("hidden")
    }
    else if (value === "hide") {
        document.getElementById("error-message").classList.add("hidden")
    }
}

function showVideoOnCards(videoData) {

    const videoCardsContainer = document.getElementById("video-cards-container")
    videoCardsContainer.innerHTML = ""

    if (videoData.length === 0) {
        showOrHideErrorMessage("show")
    }


    for (let data of videoData) {

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
}