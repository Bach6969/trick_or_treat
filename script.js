// Floating Ghost Cursor Position Update
const ghostCursor = document.getElementById("ghostCursor");
document.addEventListener("mousemove", (e) => {
    ghostCursor.style.top = `${e.clientY}px`;
    ghostCursor.style.left = `${e.clientX}px`;
});

// Candy Shower Effect
function candyShower() {
    for (let i = 0; i < 20; i++) {
        const candy = document.createElement("span");
        candy.textContent = "🍬";
        candy.classList.add("candy");
        candy.style.left = `${Math.random() * 100}vw`;
        candy.style.animationDuration = `${Math.random() * 1.5 + 1.5}s`; // Random fall duration
        document.body.appendChild(candy);
        setTimeout(() => candy.remove(), 3000); // Remove candy after 3 seconds
    }
}

// Bat Animation on Hover
function showBat() {
    const bat = document.createElement("span");
    bat.textContent = "🦇";
    bat.classList.add("bat");
    document.body.appendChild(bat);
    bat.style.top = `${Math.random() * window.innerHeight}px`;
    bat.style.left = `${Math.random() * window.innerWidth}px`;
    setTimeout(() => bat.remove(), 1500);
}

// Optional: Play sound function (Placeholder for sound files)
function playSound(type) {
    const audio = new Audio(type === 'trick' ? 'trick-sound.mp3' : 'treat-sound.mp3');
    audio.play();
}
