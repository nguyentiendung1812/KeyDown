let alert = document.querySelector('.alert')
let eKey = document.querySelector('.card-item.key p:last-child')
let eLocation = document.querySelector('.card-item.location p:last-child')
let eWhich = document.querySelector('.card-item.which p:last-child')
let eCode = document.querySelector('.card-item.code p:last-child')
let box = document.querySelector('.box')
let result = document.querySelector('.result')

document.addEventListener('keydown',(e)=>{

    eKey.innerText=e.key
    eLocation.innerText=e.location
    eWhich.innerText=e.which
    eCode.innerText=e.code
    result.innerText=e.which

    alert.classList.add('hide')
    box.classList.remove('hide')
})