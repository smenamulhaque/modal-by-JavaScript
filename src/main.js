

const modal_btn = document.getElementById("modal_btn");
const modal = document.getElementById("modal");
const close_btn = document.getElementById("close_btn");

//open modal

modal_btn.onclick=(e) => {
   e.preventDefault();
   modal.style.opacity =1;
   modal.style.pointerEvents = "auto";
  

}
close_btn.onclick=(e) => {
   
   modal.style.opacity = 0;
   modal.style.pointerEvents = "none";
}
