const Intern = require("../lib/Intern");
const intern = new Intern("Intern");
describe("Intern Class Test", () => {
  describe("test intern properties", () => {
    test("creates a intern profile", () => {
      expect(intern.role).toBe("Intern");
    });
    test("generates school", () => {
      expect(intern.getSchool()).toBe(`School: ${this.school}`);
    });
  });
});
