"use strict"

function Genre(name) {
    this.name = name
}
Genre.prototype.getData = function () {
   return this.name[0].toUpperCase() + this.name[this.name.length-1].toUpperCase()
}



function Movie(title, length, genre) {
    this.title = title
    this.length = length
    this.genre = genre
}
Movie.prototype.getData = function () {
    return this.title + ", "  + this.length + ", "  + this.genre.getData()
 }
 
 

function Program(date) {
    this.date = date
    this.list_of_movies = []
}
Program.prototype.addMovie = function (movie) {
    this.list_of_movies.push(movie)
    
}
Program.prototype.getData = function () {
    let lengthOfProgram = 0;
    let movieData = "";
 
    this.list_of_movies.forEach(function(movie) {
        lengthOfProgram += movie.length 
       movieData += movie.getData() + "\n\t"
    })
    
    

     return this.date  + ", program duration " + lengthOfProgram + "min" + "\n\t"
     +movieData
}



function Festival(name ) {
    this.name = name
    this.listOfPrograms = []
    this.Programs_total = 0
}
Festival.prototype.addProgram = function (program) {
    this.listOfPrograms.push(program)
    this.Programs_total = program.Programs_total
}

Festival.prototype.getData = function () {
    let movieData = 0
    let programs_data = ""
 
    this.listOfPrograms.forEach(function(program) {
       programs_data += program.getData()
       movieData += program.list_of_movies.length 
    })
    return this.name + " has "  + movieData + " movie titles" + "\n\t"
    + programs_data
}

function createMovie(title, length, genre) {
    let genreObject = new Genre(genre);
    return new Movie(title, genreObject, length);
}

function createProgram(date) {
    return new Program(date);
}

let genre_1 = new Genre("Triler");
let genre_2 = new Genre("Action");
console.log(genre_1.getData())

let movie_1 = new Movie("Identity", 100 , genre_1);
let movie_2 = new Movie("Shutter Island", 115 , genre_1);
let movie_3 = new Movie(" The Last of Us ", 140 , genre_1);
let movie_4 = new Movie("Avatar", 125 , genre_2);
console.log(movie_1.getData())

let program_1 = new Program("06/06/2023")
let program_2 = new Program("07/06/2023")
program_1.addMovie (movie_1)
program_1.addMovie (movie_2)
program_1.addMovie (movie_3)
program_2.addMovie (movie_4)

let festival_1 = new Festival("Summer festival")
festival_1.addProgram(program_1)
festival_1.addProgram(program_2)


console.log(festival_1.getData())

