// DATA PREPARE

// 1. get the data 



function Month(name, id, nth, days){
    this.name = name;
    this.id = id;
    this.nth = nth;
    this.days = days;
}

const months = [
    new Month("January", "jan", 1, 31),
    new Month("February", "feb", 2, 28),
    new Month("March", "mar", 3, 31),
    new Month("April", "apr", 4, 30),
    new Month("May", "may", 5, 31),
    new Month("June", "jun", 6, 30),
    new Month("July", "jul", 7, 31),
    new Month("August", "aug", 8, 31),
    new Month("September", "sep", 9, 30),
    new Month("October", "oct", 10, 31),
    new Month("November", "nov", 11, 30),
    new Month("December", "dec", 12, 31)
];

console.log(months);



// 2. prepare data 
        //business logic
        //codewars ilyen jellegű feladatok


// 3. components = HTML elements we would like to add to the document later

const monthSection = (id, h1, days) => {        //paraméterek ---> function scope
    return `
        <section id="${id}">
            <h1>${h1}</h1>
            <div class="days">${days}</div>
        </section>
    `;
}


const dayCard = (year, month, day) => {
    return `
    <div class="card">
        <time>${year}</time>
        <time>${month}</time>
        <time>${day}</time>
    </div>
    `
}

const dayCards = (month, callDayCard) => {
    let toReturn = "0";

    for (let i = 1; i <= month.days; i++) {
        toReturn += callDayCard(2022, month.nth, i)
        
    }

    return toReturn
}

console.log(dayCards(months[0], dayCard));

// 4. render = add the components to the document

const loadEvent = () => {
}

window.addEventListener("load", loadEvent)  //callback függvény, nincs a végén (), argumentumként adjuk meg