const btnEl=document.querySelector(".btn");
const closeIcon=document.querySelector(".close-icon");
const trailerContainerEl=document.querySelector(".trailer-container");
const VideoEL=document.querySelector("video");
const containerEl=document.querySelector("container");
btnEl.addEventListener("click",()=>{
    trailerContainerEl.classList.add("active");
    containerEl.style.display="none";
});
closeIcon.addEventListener("click",()=>{
    trailerContainerEl.classList.remove("active");
    containerEl.style.display="block";
    VideoEL.pause();
    VideoEL.currentTime=0;
});