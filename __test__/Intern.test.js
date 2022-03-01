const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern')


test('creates a employee profile', ()=>{
    const intern = new Intern('Dave');

    expect(intern.name).toBe('school');
  
});