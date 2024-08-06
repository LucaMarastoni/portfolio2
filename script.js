document.getElementById("icon").addEventListener("click", function() {
    const works = document.getElementById("works");
    if (works.classList.contains("show")) {
        works.classList.remove("show");
    } else {
        works.classList.add("show");
    }
});
