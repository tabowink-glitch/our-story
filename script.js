const btn = document.getElementById("openBtn");

btn.addEventListener("click", () => {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
});
