/* 
const currentDate = new Date("1999/01/02");   

console.log(currentDate);        //typeof=object
 */

// ez egy Object Construction (Date szó=contructor)

/*--------------------------------*/

//this szó = egy objektumra mutat vissza 

function Book(title, author, year, genre){
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.age = function (){
        const d = new Date()
        const currentYear = d.getFullYear()
        return currentYear - this.year
    }
}

const myFavoriteBook = new Book("Háború és béke", "Lev Tolsztoj", 1867, "historical novel")

const mySecondFavoriteBook = new Book("Az algebra alapjai", "Joe Algebra", 1992, "sci-fi" )

console.log(mySecondFavoriteBook.age());
