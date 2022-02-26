
const Employee = require('../lib/Employee');

test('creates a employee profile', ()=>{
    const employee = new Employee('Dave');

    expect(employee.name).tobe('Dave');
    expect(employee.id).tobe('id');
    expect(employee.email).tobe('email');
});