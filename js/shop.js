let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '1.PNG',
        price: '58$'
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: '58$'
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: '58$'
    },
    {
        id: 4,
        name: 'PRODUCT NAME 1',
        image: 'ASDF.JPG',
        price: '58$'
    },
];
let listCards = [];
function initApp (){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerhtml = `
        <img src="image/${value.image}"/>
        <div class="title"/>${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>        
        `;
        list.appendChild(newDiv);
    })
}
initApp();
