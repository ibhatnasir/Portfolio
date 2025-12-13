let Github = document.querySelectorAll(".github").forEach(button => {
    button.onclick = () => window.open("https://github.com/ibhatnasir", "_blank");
});

let Linkedin = document.querySelectorAll(".linkedin").forEach(button => {
    button.onclick = () => window.open ("https://www.linkedin.com/in/ibhatnasir/" , "_blank");
});

let resumeBtn = document.querySelector("#resume");

resumeBtn.onclick = () => {
    window.open("ProjectFiles/Blank resume.pdf", "_blank");
};




function goTo(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// Buttons
document.querySelector("#homeBtn").onclick = () => goTo("#homeSection");
document.querySelector("#aboutBtn").onclick = () => goTo("#aboutSection");
document.querySelector("#eduBtn").onclick = () => goTo("#educationSection");
document.querySelector("#skillsBtn").onclick = () => goTo("#skillSection");
document.querySelector("#projBtn").onclick = () => goTo("#projectSection");
document.querySelector("#contBtn").onclick = () => goTo("#contactSection");



let navButtons = document.querySelectorAll("#buttons button");

navButtons.forEach(button => {
  button.addEventListener("click", () => {

    // remove active class from all buttons
    navButtons.forEach(b => b.classList.remove("nav-active"));

    // add active class to clicked button
    button.classList.add("nav-active");

  });
});


document.querySelectorAll("#gameApp").forEach(button => {
    button.onclick = () => window.open ("https://ibhatnasir.github.io/App.js/" , "_blank");
});


// let amazonBtn = document.querySelector("#amazonClone");

// amazonBtn.onclick = () => {
//     window.open("Amazon clone/amazonclone.html", "_blank");
// };