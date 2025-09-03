function loadVideoCategoryButtons() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => {
            displayVideoCategoryButtons(data.categories)
        })
}

loadVideoCategoryButtons()

