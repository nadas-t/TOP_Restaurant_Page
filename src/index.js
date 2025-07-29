import "./style.css"

import homepage from "./js_modules/homepage"
import menu from "./js_modules/menu"
import contactus  from "./js_modules/contactUs"

const contentDiv=document.getElementById('content')
homepage(contentDiv);

const navBut=document.querySelectorAll(".nav-but")

navBut.forEach(button=>{
    button.addEventListener("click",()=>{
        console.log("clicado sa poha")
        const tab=button.dataset.tab
        if (tab==="Home"){
            homepage(contentDiv);
        }
        else if(tab==="Menu"){
            menu(contentDiv)
        }
        else if(tab==="Contact"){
            contactus(contentDiv)

        }
    })
})





