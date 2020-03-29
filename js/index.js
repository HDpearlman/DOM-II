// Your code goes here

// 1 mouseenter
const busImage = document.querySelector('header img');

busImage.addEventListener('mouseenter', () => {
busImage.style.transform = 'scale(1.2)';
busImage.style.transition = 'all 0.4s';
})


// 2 mouseleave
busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = 'scale(1)'
    // busImage.style.transition = 'all .4s'
})

const logo = document.querySelector('header h1');

// logo.addEventListener('dblclick', ()=>{
//     logo.textContent = 'Bus Fun';
// })

// 3 dblclick
logo.addEventListener('dblclick', ()=>{
    if(logo.textContent === 'Bus Fun'){
        logo.textContent = 'Fun Bus'
    }
    else(logo.textContent = 'Bus Fun')
})


//3 resize
const imgContent = document.getElementsByClassName('img-content');

console.log(imgContent);

window.addEventListener('resize', () =>{
    imgContent[0].children[0].src = "img/fun.jpg";
    imgContent[1].children[0].src = "img/adventure.jpg";
}
)

//4 click
const textElements = document.querySelectorAll('p');

textElements.forEach(element => {
    element.addEventListener(`click`, (event) => {
        event.target.style.color = 'purple'
        event.stopPropagation();        })
})

//5 mouseover

const titleHeaders = document.querySelectorAll('h2, h4');

console.log(titleHeaders)

titleHeaders.forEach(header => {
    header.addEventListener("mouseover", (event) => {
event.target.style.color = 'blue'})
})



//6




//stop propogation // see above click event 4 that stops propogation

const letsGo = document.querySelector('.content-section');
console.log(letsGo)

letsGo.addEventListener("click", () => {
    letsGo.style.backgroundColor = 'pink';
})

