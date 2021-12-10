// let darkmode = document.querySelector(".toggle");
// darkmode.addEventListener("change", function (event) {
//     event.preventDefault();
//     darkmodeupdate();
// })

const toggle = document.getElementById("toggle");
const  body = document.body;


toggle.addEventListener("input", a => {
    const checkchecked = a.target.checked;


    if (checkchecked) {
        document.body.style = ".toggle";
    } else {
        document.body.style = ".light-theme";
    }




})
