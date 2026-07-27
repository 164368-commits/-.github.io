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

    const countdown = document.getElementById("countdown");


    // ซ่อนปุ่ม
    this.style.display = "none";


    // แสดงเลข
    countdown.style.display = "block";
    countdown.innerHTML = count;


    // เอฟเฟกต์เลขแรก
    countdown.classList.add("countChange");



    let timer = setInterval(()=>{


        count--;


        if(count > 0){


            countdown.innerHTML = count;


            // รีเซ็ตเอฟเฟกต์ทุกครั้งที่เลขเปลี่ยน
            countdown.classList.remove("countChange");
            void countdown.offsetWidth;
            countdown.classList.add("countChange");



        }else{


            clearInterval(timer);


            countdown.innerHTML = "🎉";


            countdown.classList.remove("countChange");
            void countdown.offsetWidth;
            countdown.classList.add("countChange");



            setTimeout(()=>{


                // ปิดหน้าจอเริ่ม
                document.getElementById("startScreen").style.display="none";


                // เปิดการ์ด
                document.getElementById("content").style.display="block";


                // เล่นเพลง
                music.play();



                // เปลี่ยนรูปทุก 5 วิ
                setInterval(()=>{


                    index++;


                    if(index >= images.length){

                        index = 0;

                    }


                    document.getElementById("slide").src = images[index];


                },5000);



                // หัวใจลอย
                setInterval(createHeart,250);



            },800);


        }


    },1000);


}



function createHeart(){


const heart = document.createElement("div");


heart.className="heart";


heart.innerHTML="💖";


heart.style.left=Math.random()*100+"vw";


heart.style.fontSize=(20+Math.random()*35)+"px";


heart.style.animationDuration=(4+Math.random()*5)+"s";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},9000);


}
