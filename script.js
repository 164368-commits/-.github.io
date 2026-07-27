// ===== รูปภาพ =====
const images = [
    "751035036_1719591268958655_8370233642973154637_n.jpg",
    "752550920_1018062320995628_3834456038027307601_n.jpg",
    "754015096_2926203654416033_1176873942568398260_n.jpg",
    "753105080_1500194058456130_231933915178450339_n.jpg",
    "751134574_1477406654429882_498575148599167075_n.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

// เปลี่ยนรูปทุก 3 วินาที
setInterval(() => {
    slide.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        slide.src = images[index];
        slide.style.opacity = 1;
    }, 500);

}, 3000);

// ===== กดปุ่ม =====
function startBirthday() {

    const music = document.getElementById("music");
    music.play();

    document.getElementById("text").style.display = "block";

}

// ===== เอฟเฟกต์ลอย =====
const icons = [
    "🎈",
    "🎂",
    "🎉",
    "🎁",
    "✨",
    "💖",
    "🥳"
];

function createFloat() {

    const item = document.createElement("div");

    item.className = "float";

    item.innerHTML = icons[Math.floor(Math.random() * icons.length)];

    item.style.left = Math.random() * 100 + "vw";

    item.style.fontSize = (20 + Math.random() * 25) + "px";

    item.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 7000);

}

// สร้างเอฟเฟกต์ทุก 250 ms
setInterval(createFloat, 250);
