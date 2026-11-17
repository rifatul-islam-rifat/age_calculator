const calculateBtn = document.getElementById("calculateBtn");
const date = document.getElementById("date");
let year = document.getElementById("year")
let months = document.getElementById("months")
let days = document.getElementById("days")


calculateBtn.addEventListener("click", ()=>{
    // console.log("hello world!");
    // console.log(date)
    let birthYear = new Date(date.value);
    birthYear = birthYear.getFullYear();
    let month = new Date(date.value);
    month = month.getMonth() + 1;
    let day = new Date(date.value);
    day = day.getDay() + 1;
    
    let currentYear = 2026;
    
    try{
        
        let age = parseInt(currentYear) - parseInt(birthYear);
        year.textContent = age;
        months.textContent = month;
        days.textContent = day;

    } catch{

        console.log(`error`)

    }

    // console.log(birthYear)
    
})