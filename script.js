const music = document.getElementById("music");

const images = [
"751035036_1719591268958655_8370233642973154637_n.jpg",
"752550920_1018062320995628_3834456038027307601_n.jpg",
"754015096_2926203654416033_1176873942568398260_n.jpg",
"753105080_1500194058456130_231933915178450339_n.jpg",
"751134574_1477406654429882_498575148599167075_n.jpg"
];

let index = 0;


document.getElementById("startBtn").onclick = function(){

    let count = 3;

    let countdown = document.getElementById("countdown");

    // ซ่อนปุ่ม
    this.style.display = "none";

    // แสดงเลขแรก
    countdown.innerHTML = count;


    let timer = setInterval(function(){


        count--;

        countdown.innerHTML = count;


        if(count === 0){

            clearInterval(timer);


            // รอแป๊บก่อนเปิด
            setTimeout(()=>{


                document.getElementById("startScreen").style.display="none";

                document.getElementById("content").style.display="block";


                // เล่นเพลง
                music.play();



                // เปลี่ยนรูป
                setInterval(()=>{

                    index++;

                    if(index >= images.length){
                        index = 0;
                    }

                    document.getElementById("slide").src = images[index];

                },5000);



                // หัวใจลอย
                setInterval(createHeart,250);


            },500);


        }


    },1000);

};



// หัวใจลอย
function createHeart(){

    const heart = document.createElement("div");

    heart.className="float";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*40)+"px";

    heart.style.animationDuration=(4+Math.random()*5)+"s";


    document.body.appendChild(heart);


    setTimeout(()=>{
        heart.remove();
    },9000);

}
