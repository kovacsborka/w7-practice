
//object constructor
function Country(name, short, population, flag, continent){
    this.name = name,
    this.short = short,
    this.population = population,
    this.flag = flag,
    this.continent = continent
}

const menuButton = () => {
    return `
    <button id=menubtn>
        <svg width="40px" heigth="40px">
            <rect width="20px" height="2px" />
            <rect width="20px" height="2px" />
            <rect width="20px" height="2px" />
        </svg> 
        <span>Button</span> 
    </button>
    `  
}
//components 
const header = (logo, button) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>
    `;
}
 
//countrycard
const countryCard = (country) => {
    return `
    <div id="card">
    <h1>${country.name}</h1>
    <h2>${country.short}</h2>
    <p>${country.population}</p>
    <p>${country.continent}</p>
    <img src="${country.flag}"></img>
    </div>
    `;
    
    
    
    // div cards idval
}


//countrycard
const countryCards = (contentHTML) => {
    return `
    <section class="country-cards">${contentHTML}</section>
    `
}





const loadEvent = async _ => {              // _ ---> nem használunk paramétert  //async = aszinkron művelet

    //get data
    const countryRes = await fetch("https://restcountries.com/v3.1/all");    //await ---> megvárjuk, míg betölt a fetch
    const countryArr = await countryRes.json();  

    //process data
    let countries = countryArr.map(function (country) {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0]);
    })

    
    console.log(countries);
    
    

    // console.log(countries)

    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", header("Countries", menuButton))
    

    //adding countryHTML 
    let countryHTML = ""
    countries.forEach(country => {
        countryHTML += countryCard(country)
    });
    rootElement.insertAdjacentHTML("beforeend", countryCards(countryHTML)) 


    const getMenuButton = document.getElementById("menubtn")
    getMenuButton.addEventListener("click", (event) => {
        event.target.classList.toggle("clicked")
    }
    )

}

window.addEventListener("load", loadEvent)  //callback függvény, nincs a végén (), argumentumként adjuk meg