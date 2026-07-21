// รายชื่อรูป 5 รูป
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];

let index = 0;

// เปลี่ยนรูปทุก 3 วินาที
setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
}, 3000);

// กดปุ่มเพื่อเล่นเพลงและแสดงข้อความ
function startLove() {
    document.getElementById("music").play();
    document.getElementById("text").style.display = "block";
}

