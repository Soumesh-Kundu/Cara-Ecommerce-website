const hamburger_bar=document.querySelector("#bar")
const navbar=document.querySelector('#navbar')
const close_btn=document.getElementById('close')
hamburger_bar.addEventListener('click',()=>{
        navbar.style.right='0px'
    })
close_btn.addEventListener('click',()=>{
        navbar.style.right='-300px'
})