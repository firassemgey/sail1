

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
const img =document.querySelectorAll(".changImg");
if (window.innerWidth <= 1024) {
    for (let i = 0; i < img.length; i++) {
        img[i].className="img1";
    }


}

if (window.innerWidth <= 600) {
    // Set the <= 800 state
     const swipertextwhite =document.getElementById("swipertextwhite");
     const paginationWrapper =document.querySelector(".swiper-pagination-wrapper");
     const socialRes = document.querySelectorAll(".socialRes");

    if (swipertextwhite){
            let swipertextwhite= document.getElementById("swipertextwhite");
        swipertextwhite.className="swiper text-white swiper-full swiper-full-horizontal swiper-portfolio-animejs";
        swipertextwhite.setAttribute("data-swiper-center", "true");
        swipertextwhite.removeAttribute('data-swiper-vertical');
        paginationWrapper.remove();
        const newDiv = document.createElement("div");
        swipertextwhite.appendChild(newDiv);
        newDiv.className="swiper-pagination";
        const cardFullscreen=document.querySelectorAll(".card-fullscreen");
        for (let m = 0; m < socialRes.length; m++) {
            socialRes[m].className = "card-social nav nav-gap-md align-items-center flex-column text-white flex-column1";
        }
        for (let i = 0; i < cardFullscreen.length; i++) {
            cardFullscreen[i].className="card card-portfolio card-overlay card-image-sm card-bg-show text-white text-center";
        }
        for (let i = 0; i < img.length; i++) {
            img[i].src="assets/images/portfolio/"+ i + i +".jpg";
        }
    }else {

    }}
