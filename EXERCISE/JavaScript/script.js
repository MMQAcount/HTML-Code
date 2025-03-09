// console.log("Hello World!")
// function sum (n1, n2){
//     return n1+n2;
// }
// const result = sum(5, 6);
// console.log(result);

// const multip = (n1,n2) => n1*n2;
 
// console.log(multip(5, 9));

// const result1 = function square (n1){
//     return n1 * n1;
// }

// const names = ['Ali', 'Ahmed', 'Mohammes']
// const new_names = names.map(
//     (names, index) => (index  + ':' + names.length)
// );
// console.log(new_names);
class Car {
    constructor(make, modle, year){
        this.make = make;
        this.model = modle;
        this.year = year;
    }
    set MakeSet(make){
        this.make = make;
    }
    set MakeGet(make){
        this.make = make;
    }
    printCard(){
        console.log(`Car Make: ${this.make}\nCar Modle: ${this.model}\nCar Year: ${this.year}`);
        
    }
}

const car1 = new Car('BMW', "nn", 2020);
car1.printCard();
car1.MakeSet = "Mazda";
car1.printCard();

if(!null){
    localStorage.setItem("user1" , prompt("Enter your name:"));
}
let name2 = localStorage.setItem("user2", "Maram");
document.write(localStorage.getItem("user1"));
