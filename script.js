let arr = [
    
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold'
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'black'
    },
    {
        team: 'PBKS',
        primary: 'crimson',
        secondary: 'silver'
    },

]

let main = document.querySelector('main');
let btn = document.querySelector('button');
let h1 = document.querySelector('h1');

btn.addEventListener('click',function(){
    let winner = Math.floor(Math.random()*arr.length);
    h1.innerHTML = arr[winner].team;
    main.style.backgroundColor = arr[winner].secondary;
    h1.style.backgroundColor = arr[winner].primary;
})