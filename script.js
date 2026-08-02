const btn = document.getElementById("openBtn");

btn.addEventListener("click", () => {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
});
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
});

// Membuat love putih
setInterval(() => {
    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "fall 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },6000);

},800);
const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", () => {

        document.getElementById("intro").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("intro").style.display = "none";

            document.getElementById("mainContent").style.opacity = "1";

        }, 800);

    });
}
