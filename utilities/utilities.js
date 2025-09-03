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
            <div onclick="showVideoCategoryDetailsById('${data.video_id}')" class="card cursor-pointer">
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

function showVideoModal(data) {
    document.getElementById("video_details_modal").showModal();
    const modalDetails = document.getElementById("modal-details")
    modalDetails.innerHTML = `
    <div class="max-w-md p-8 sm:flex sm:space-x-6  ">
	<div class="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src="${data.authors[0].profile_picture}" alt="" class="object-cover object-center w-full h-full rounded">
	</div>
	<div class="flex flex-col space-y-4">
		<div>
			<h2 class="text-2xl font-semibold">${data.authors[0].profile_name}</h2>
			<span class="text-sm ">${data.others.views}</span>
		</div>
		<div class="space-y-1">
			<span class="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" class="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span class="">${data.authors[0].profile_name}@gmail.com</span>
			</span>
			<span class="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" class="w-4 h-4">
					<path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
				</svg>
				<span class="">+25 381 77 983</span>
			</span>
		</div>
	</div>
</div>
    `
}