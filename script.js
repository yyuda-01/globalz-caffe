// ====================== MUSIC TOGGLE =======================
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
const iconOn = document.getElementById("icon-on");
const iconOff = document.getElementById("icon-off");

// Autoplay setelah user pertama kali klik layar
document.addEventListener("click", function () {
    music.play().catch(() => {});
    musicBtn.classList.add("playing");
    iconOn.classList.add("rotate");  // <-- ROTATE SAAT START
}, { once: true });

// Klik tombol musik untuk ON/OFF
musicBtn.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        iconOn.style.display = "block";
        iconOff.style.display = "none";
        musicBtn.classList.add("playing");
        iconOn.classList.add("rotate");  // <-- PUTAR
        iconOff.classList.remove("rotate");
    } else {
        music.pause();
        iconOn.style.display = "none";
        iconOff.style.display = "block";
        musicBtn.classList.remove("playing");
        iconOn.classList.remove("rotate"); // <-- STOP PUTAR
        iconOff.classList.remove("rotate");
    }
});

// 6 Desember 2025 jam 16:00 WITA
// WITA = UTC+8 → 16:00 WITA = 08:00 UTC
let eventDate = new Date(Date.UTC(2025, 11, 6, 8, 0, 0));
// bulan 11 = Desember (index 0)

let timer = setInterval(function () {
    let now = new Date();
    let diff = eventDate - now;

    if (diff <= 0) {
        document.getElementById("timer").innerHTML = "Acara Sedang Berlangsung!";
        clearInterval(timer);
        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);

const smallPhotos = [
    "assets/banner-2.jpeg",
    "assets/banner-1.jpeg",
    "assets/foto-5.jpeg",
    "assets/foto-6.jpeg"
];

const bigPhoto = document.querySelector(".big-photo");
let index = 0;

function updateBigPhoto() {
    bigPhoto.classList.add("fade-out");

    setTimeout(() => {
        bigPhoto.src = smallPhotos[index];

        bigPhoto.classList.remove("fade-out");
        bigPhoto.classList.add("fade-in");

        setTimeout(() => {
            bigPhoto.classList.remove("fade-in");
        }, 600);

        index = (index + 1) % smallPhotos.length;
    }, 600);
}

setInterval(updateBigPhoto, 5000);



