document.addEventListener("DOMContentLoaded", () => {
// document.body.style.backgroundColor="white"
// fetch('https://api.chucknorris.io/jokes/random')
// .then((test) => test.json())
// .then((test2)=>{
//     console.log(test2)
//     handle(test2)
// }
// )

// const handle=(deets)=> {
// document.querySelector('p').innerText=deets.value
// document.querySelector('img').src =deets.icon_url
// }
const name=document.querySelector('input')
const button=document.querySelector('button')
const avatarContainer = document.createElement("div")
document.body.appendChild(avatarContainer);

const genImg=(seed)=>{
    fetch(`https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`)
.then((r1)=>r1.text())
.then((r2)=>{
    avatarContainer.innerHTML = r2
})
}

button.addEventListener("click",()=>{
    
    genImg(name.value.trim())
})

// const handle= (deets) => {
//     document.querySelector('p').innerText=deets.value
// }

})