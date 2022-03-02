
//object constructor
function Country(name, short, population, flag, continent){
    this.name = name,
    this.short = short,
    this.population = population,
    this.flag = flag,
    this.continent = continent
}

//components 
const header = (logo) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        <button></button>
    </header>
    `;
}
 
const countryCard = () => {
    return `
        <div id="card">
            <h1>${Country.name}</h1>
            <h2>${Country.short}</h2>
            <p>${Country.population}</p>
            <p>${Country.flag}</p>
        </div>
        `;
    
        
    
// div cards idval
}


const countryCards = (countryName, countryCard) => {
    let toReturn = ""
    for (let i = 0; i < .length; i++) {

    }
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
    // rootElement.insertAdjacentHTML("beforeend", header("Countries")) 
    rootElement.insertAdjacentHTML("beforeend", countryCard()) 


}

window.addEventListener("load", loadEvent)  //callback függvény, nincs a végén (), argumentumként adjuk meg