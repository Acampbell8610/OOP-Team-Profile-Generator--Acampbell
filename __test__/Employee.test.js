
const Employee = require('../lib/Employee');


test('creates a employee profile', ()=>{
    const employee = new Employee('Dave', 1,'email');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email');
});
//expect(obj).toEqual(expect.stringContaining(substr))