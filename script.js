// =======================
// รูปภาพ
// =======================
const images = [
    "751035036_1719591268958655_8370233642973154637_n.jpg",
    "752550920_1018062320995628_3834456038027307601_n.jpg",
    "754015096_2926203654416033_1176873942568398260_n.jpg",
    "753105080_1500194058456130_231933915178450339_n.jpg",
    "751134574_1477406654429882_498575148599167075_n.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

// สไลด์รูป
setInterval(() => {
    slide.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        slide.src = images[index];
        slide.style.opacity = 1;
    }, 500);

}, 3000);

// =======================
// ข้อความอวยพร
// =======================
const message = `🎉 สุขสันต์วันเกิดนะ 🎂

ขอให้มีความสุขมาก ๆ 💖

สุขภาพแข็งแรง
สมหวังในทุกเรื่อง

ขอให้ยิ้มเยอะ ๆ 😊
เจอแต่สิ่งดี ๆ

คิดหวังสิ่งใด
ขอให้สมหวังทุกประการ ✨

🎂 Happy Birthday 🎂`;

let played = false;

// =======================
// กดปุ่ม
// =======================
function startBirthday() {

    if (played) return;
    played = true;

    // เล่นเพลง
    const music = document.getElementById("music");

    music.volume = 0.7;

    music.play().catch(error => {
        console.log("เล่นเพลงไม่ได้", error);
    });

    // พลุ
    fireworks();

    // แสดงข้อความ
    const text = document.getElementById("text");
    text.style.display = "block";
    text.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < message.length) {

            if (message[i] === "\n") {
                text.innerHTML += "<br>";
            } else {
                text.innerHTML += message[i];
            }

            i++;
            setTimeout(typing, 45);
        }
    }

    typing();
}

// =======================
// เอฟเฟกต์ลอย
// =======================
const icons = ["🎈","🎂","🎉","🎁","✨","💖","🥳"];

function createFloat() {

    const item = document.createElement("div");

    item.className = "float";
    item.innerHTML = icons[Math.floor(Math.random() * icons.length)];

    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = (20 + Math.random() * 20) + "px";
    item.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 7000);

}

setInterval(createFloat, 250);

// =======================
// พลุ
// =======================
function fireworks() {

    if (typeof confetti !== "function") return;

    const duration = 10000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 10,
            angle: 60,
            spread: 70,
            origin: { x: 0, y: 0.8 }
        });

        confetti({
            particleCount: 10,
            angle: 120,
            spread: 70,
            origin: { x: 1, y: 0.8 }
        });

        confetti({
            particleCount: 18,
            spread: 120,
            startVelocity: 45,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.5
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}
