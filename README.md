# Project Name: PhTube

## Project Description:  
PHTube is a responsive, web-based video streaming application where i can browse, search, and watch videos across various categories such as Music, Comedy, and Drawing. I build this project to practice on REST APIs, dynamic DOM manipulation, event handling etc.

## Live Site Link:
https://web-projects-16.netlify.app/

## Project Video:

## Features:
- I can search videos
- I can see video based on category when click category buttons like (all, Music etc).
- I can see author details modal when click on the video card 

## What I Learned New while Building This Project:

1. how to Convert different date formats into a readable date
```js
function formatDate(value) {
    if (!value) return "";

    const num = Number(value);

    if (value.length === 10) {
        return new Date(num * 1000).toDateString();
    }

    if (num < 100000) {
        return new Date(num * 24 * 60 * 60 * 1000).toDateString();
    }


    return new Date(num).toDateString();
}
```
- if (!value) return "";
  - If the date is empty (like ""), immediately return an empty string.

- const num = Number(value);
  - Converts the string (e.g., "16278") into a number (16278).

- if (value.length === 10)
  - If the string has 10 characters, it’s probably a Unix timestamp in seconds (1672656000).

  - ```new Date(num * 1000).toDateString();```
  - Multiply by 1000 (convert seconds → milliseconds).
  - Convert into a readable date like "Mon Jan 02 2023".

- if (num < 100000)
  - If the number is small (like 16278), treat it as days since Jan 1, 1970.
  
  - ```return new Date(num * 24 * 60 * 60 * 1000).toDateString();```  

    - 1 day = 24 hours × 60 minutes × 60 seconds × 1000 ms = 86400000 ms.
    - Multiply num days by 86400000 → you get the exact milliseconds.
    - new Date(milliseconds) automatically starts from Jan 1, 1970.

- return new Date(num).toDateString();
  - If it didn’t match the above cases, just assume it’s already in milliseconds.

## Challenges I faced while Building This Project:
1. I mistakenly add double quotes inside double quotes in a onclick function:

``` <div onclick="showVideoCategoryDetailsById("${data.video_id}")" class="card cursor-pointer">```

so, it's takes some time to find the error and resolve it with single quotes:  
 
```index.html:1 Uncaught SyntaxError: Unexpected end of input (at index.html:1:30)            index.html:1```
```<div onclick="showVideoCategoryDetailsById('${data.video_id}')" class="card cursor-pointer">```

2. i want to use our previously used function to implement search functionality, but it's not worked because of of loadALlVideoData function only worked when i click the all button: 

```js
function loadAllVideoData(search = "") {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos`)
        .then(res => res.json())
        .then(data => {
            displayAllVideoDataThroughCards(data.videos)
        })
}
loadAllVideoData();

function displayAllVideoDataThroughCards(allVideoData) {

    showOrHideErrorMessage("show")

    document.getElementById("display-all-video-btn").addEventListener("click", () => {
        removeActiveClass()
        showVideoOnCards(allVideoData)
        document.getElementById("display-all-video-btn").classList.add("active")
        showOrHideErrorMessage("hide")
    })
}


document.getElementById("search").addEventListener("keyup", (e) => {
    const input = e.target.value;
    loadAllVideoData(input);

});
```

so i write a another new function do implement search functionality: 

```js
function showSearchVideo(search = "") {
    const url = `https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showOrHideErrorMessage("show")
            showVideoOnCards(data.videos)
            showOrHideErrorMessage("hide")
        })
}


document.getElementById("search").addEventListener("keyup", (e) => {
    const input = e.target.value;
    showSearchVideo(input);

});
```

## Contact With Me: 

tamim.muhammad2005@gmail.com | https://www.linkedin.com/in/tamim-muhammad | +8801586090360 (WhatsApp)

---

Thank you so much for checking out my project! If you have any suggestions or feedback, feel free to share them.

