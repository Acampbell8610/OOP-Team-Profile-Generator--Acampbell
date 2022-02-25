

class Employee {
    constructor(name = ''){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){

    };
    getId(){

    };
    getEmail(){

    };
    getRole(){

    };
};
class Manager extends Employee{
    constructor(officeNumber){
        super(officeNumber);
    };
    getRole(){

    };
};
class Engineer extends Employee{
    constructor(github){
        super(github);
    };
    getGithub(){

    }
    getRole(){

    }
};
class Intern extends Employee{
    constructor(school){
        super(school)
    };
    getSchool(){

    };
    getRole(){

    };
}