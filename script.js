const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");
const openBtn = document.getElementById("openBtn");
const story = document.getElementById("story");

// Intro
startBtn.addEventListener("click", () => {
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        main.style.opacity = "1";
    }, 800);
});

// Scroll ke cerita
openBtn.addEventListener("click", () => {
    story.scrollIntoView({
        behavior: "smooth"
    });
});

// Love putih
setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    heart.style.zIndex = "999999";
    heart.style.pointerEvents = "none";
    heart.style.animation = "fall 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

},800);
