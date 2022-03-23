

const input =document.querySelectorAll(".form-check-input");
const label =document.querySelectorAll(".form-check-label")
input.forEach((inp,index)=>{
    inp.addEventListener("change", ()=>{
        const text=label[index].textContent;

        if(text==="Firas" && inp.checked === true){
             const them= document.getElementById("them");
             them.setAttribute("href","assets/css/themebau.min.css")


        }
            else if(text==="Saeed" && inp.checked === true ) {
                const them = document.getElementById("them");
                them.setAttribute("href", "assets/css/themebau2.min.css")
            }
})
});

const btn = document.getElementById("btnbar");
    btn.addEventListener("click",()=>{
    const enabel=document.getElementById("end-bar");
    enabel.style.right = "0";
});
const btn_save = document.getElementById("resetBtn");
btn_save.addEventListener("click",()=>{
    const enabel=document.getElementById("end-bar");
    enabel.style.right = "";
});

if (window.innerWidth <= 1024) {
    const img =document.getElementById("img1");
    img.className="img1";

}

if (window.innerWidth <= 600) {
    // Set the <= 800 state
     const swipertextwhite =document.getElementById("swipertextwhite");

    if (swipertextwhite){
            let swipertextwhite= document.getElementById("swipertextwhite");
        swipertextwhite.className="swiper text-white swiper-full swiper-full-horizontal swiper-portfolio-animejs";
        swipertextwhite.setAttribute("data-swiper-center", "true");
        swipertextwhite.removeAttribute('data-swiper-vertical');
    }else {

    }}
