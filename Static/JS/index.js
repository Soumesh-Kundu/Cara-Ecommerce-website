

const hamburger_bar=document.querySelector("#bar")
const navbar=document.querySelector('#navbar')
const close_btn=document.getElementById('close')
let mainimg=document.getElementById('main-image')
let smallimg = document.getElementsByClassName('small-image')
hamburger_bar.addEventListener('click',()=>{
        navbar.style.right='0px'
    })
close_btn.addEventListener('click',()=>{
        navbar.style.right='-300px'
})

Array.from(smallimg).forEach((element)=>{
        element.addEventListener('click',()=>{
                mainimg.src=element.src
        })
})
console.log(mainimg)