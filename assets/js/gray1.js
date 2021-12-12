

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




if (window.innerWidth <= 700) {
    // Set the <= 800 state
    window.onload=function(){
        const screen = document.getElementById("12213");
        screen.addEventListener("click",()=>{
            screen.setAttribute("href", "carousel-dark.html");
        });
    };

} else {
    // Set the > 800 state


}