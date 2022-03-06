function Employee() {
    this.name = 'name';
    this.id = 1;
    this.email = 'email@this.email.com';
}

this.getName = function() {
    return{
    name: this.name
    };
};


    

module.exports = Employee;