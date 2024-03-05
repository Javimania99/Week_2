class Contacts{
    Contacts(){
        this.arrPersons = [];
    }

    printPersons(){
        this.arrPersons.forEach(element => {
            element.printAll();
        });
    }
}
module.exports = {Contacts};