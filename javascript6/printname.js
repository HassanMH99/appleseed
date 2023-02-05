const person = {
    name: 'Mohammad Hassan',
    printName: function() {
    console.log(this.name);
    },
    printNameAfterOneSecond: function() {
    setTimeout(function() {
    this.printName();
    }.bind(this), 1000);
    }
    };
    person.printName()
    person.printNameAfterOneSecond();