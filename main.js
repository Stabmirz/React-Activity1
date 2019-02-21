class Developer{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName(){
        return this.firstname + " " +this.lastname;
    }
}

var developer1 = new Developer('Abida', 'Mirza');

console.log(developer1.getName());

class JavaScriptDeveloper extends Developer{
    getJob(){
        return 'JavaScript Developer';
    }
}

var developer1 = new JavaScriptDeveloper('Nijhum', 'Jawad');

console.log(developer1.getName());
console.log(developer1.getJob());

const Greeting = () => {
    return 'Welcome to React Dev';
}

console.log(Greeting());