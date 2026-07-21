// รายชื่อรูป 5 รูป
const images = [
   "752550920_1018062320995628_3834456038027307601_n.jpg",
"754015096_2926203654416033_1176873942568398260_n.jpg",
"753105080_1500194058456130_231933915178450339_n",
"751134574_1477406654429882_498575148599167075_n.jpg",
"749419435_906666985822657_1804846366889359069_n.jpg"
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

