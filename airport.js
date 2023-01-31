"use strict";

(function () {

  /* constructor function for Person */
  function Person(name, lastname) {
    this.personName = name;
    this.personLastname = lastname;
    this.getData = function () {
      this.data = this.personName + " " + this.personLastname;
      return this.data;
    };
  };
 /* Proba: var person1=new
  Person("Petar", "Peric")
  console.log(person1.getData());*/

  // function for Seat */
  function Seat(number, category) {
    this.seatNumber = number;
    this.seatCategory = category;
    this.getData = function () {
      this.data = this.seatNumber + ", " + this.seatCategory;
      return this.data;
    };
  };
  /* Proba: 
  var seat1= new 
  
  Seat(8,"b");
  console.log(seat1.getData())
  

  /* function for Passenger */
  function Passenger(person, seat) {
    this.passengerNameLastname = person.getData();
    this.passengerSeat = seat.getData();
    this.getData = function () {
      this.data = this.passengerSeat + ", " + this.passengerNameLastname;
      return this.data;
    };
  };
 /*Proba:
  var passenger1= new
  
  Passenger(person1,seat1);
  console.log(passenger1.getData())

  /* Flight */
  function Flight(relation, date) {
    this.flightRelation = relation;
    this.flightDate = date;
    this.passengerList = [];
    this.addPassenger = function (passenger) {
      this.passengerList.push(passenger);
    };
    this.getData = function () {
      var string = this.flightDate + ", " + this.flightRelation + "\n";
      this.passengerList.forEach( function (num)  {
        string += "\t\t\t\t\t\t " + num.passengerSeat + ", " + num.passengerNameLastname + "\n";
      });
      return string;
    };
  };

  /*  Airport */
  function Airport(name) {
    this.airportName = name;
    this.airportListOfFlights = [];
    this.addFlight = function (flight) {
      this.airportListOfFlights.push(flight);
    };
  };

  
  function createFlight(relation, date) {

    var vowels = ["a", "e", "i", "o", "u"];
    var removeVowels = relation.split('').filter(element => !vowels.includes(element) && !" ".includes(element)).join('');
    var getingWords = removeVowels.split("-");
    var fromDestination = getingWords[0][0].toUpperCase() + getingWords[0][getingWords[0].length - 1].toUpperCase();
    var arivalDestination = getingWords[1][0].toUpperCase() + getingWords[1][getingWords[1].length - 1].toUpperCase();
    var fullDestination = fromDestination + " - " + arivalDestination;

    var flightDate = new Date(date).toLocaleDateString("en-GB");
    var dateSplit = flightDate.split("/");
    dateSplit = dateSplit[1] + "." + dateSplit[0] + "." + dateSplit[2];

    var flight = new Flight(fullDestination, dateSplit);
    return flight;
  };

  
  function createPassenger(firstName, lastName, seat, category) {

    var seatNumber = seat == "" ? Math.floor(Math.random() * 100) + 1 : seat;
    var seatCategory = category == "" ? "e" : "b";

    var person = new Person(firstName, lastName);
    var seat = new Seat(seatNumber, seatCategory);
    var passenger = new Passenger(person, seat);
    return passenger;
  };

  /*  airport Object */
  var airport = new Airport("Nikola Tesla");

  /* creating flights */
  var flight1 = createFlight("Beograd - Minhen", "Sep 25 2023");
  var flight2 = createFlight("Minhen - Beograd", "Nov 11 2023");

  /*  passengers */
  var person1 = createPassenger("Marko", "Jovic", 1, "b");
  var person2 = createPassenger("Petar", "Petrovic", 2, "");
  var person3 = createPassenger("Marija", "Savic", 14, "");
  var person4 = createPassenger("Uros", "Savic", 15, "");

  /* adding passengers to flights */
  flight1.addPassenger(person1);
  flight1.addPassenger(person2);
  flight2.addPassenger(person3);
  flight2.addPassenger(person4);

  /* adding flights to airport */
  airport.addFlight(flight1);
  airport.addFlight(flight2);

  /* sum of all passengers at airport */
  var sumOFPassengers = 0;
  airport.airportListOfFlights.forEach(function (num) {
    sumOFPassengers += num.passengerList.length;
  });

  /* print datas on display */
  console.log("Airport: " + airport.airportName + ", total passengers: " + sumOFPassengers);
  airport.airportListOfFlights.forEach(function (num) {
    console.log("\t\t\t " + num.getData());
  });
})();