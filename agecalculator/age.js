const input = document.getElementById('date')
const button = document.getElementById('button');
const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');

let years;
let months;
let days;
const todayYear = new Date().getFullYear();
const todayMonth = new Date().getMonth();
const todayDay = new Date().getDay();
input.addEventListener('input',(e)=>{
    let day = new Date(e.target.value);
    
    years = day.getFullYear();
    months = day.getMonth();
    days = day.getDay();
    
})
button.addEventListener('click',()=>{
    if(years === undefined) alert("Please enter your birthday")
    else {
            year.innerText = todayYear - years;
            month.innerText = todayMonth - months;
            day.innerText = todayDay - days;
        }
    
});
console.log(new Date());

console.log(todayDay);
console.log(todayMonth);
console.log(todayYear);