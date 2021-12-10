

// const toggle = document.getElementById("toggle");
// const  body = document.body;


// toggle.addEventListener("input", a => {
//     const checkchecked = a.target.checked;


//     if (checkchecked) {
//         document.body.style = ".toggle";
//     } else {
//         document.body.style = ".light-theme";
//     }




// })

let submitbutton = document.querySelector("submit");

submitbutton.addEventListener("click", function (event) {
    event.preventDefault();

    let message = document.getElementById('msg')
    let name = document.getElementById('name') 
    let submit = document.getElementById('frm-btn')

    console.log(message, name, submit)
})
