class Person{
    
    constructor(name,lastName,weight,height,nationality,yearOfBirth,hobbies=[]){
        this.name = name;
        this.lastName = lastName;
        this.weight = weight;
        this.height = height;
        this.nationality = nationality;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }
    calcAge(){

        let date = new Date();
        return date.getFullYear() - this.yearOfBirth;
    }

    calcIMC(){

        let imc = (this.weight / Math.pow(this.height,2))*10000;
        return Number(imc.toFixed(2));
    }

    printAll(){

        for (const attribute in this) {
            console.log(`${attribute}-${this[attribute]}`);
        }
    }

    printHobbies(){

        for (const hobbie in this.hobbies) {
            console.log(this.hobbies[hobbie]);
        }
    }
}

module.exports = {Person};