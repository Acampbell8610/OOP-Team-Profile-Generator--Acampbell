const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Engineer");
describe("Employee Class Test", () => {
  describe("test employee properties", () => {
    test("creates a enginer profile", () => {
      expect(engineer.role).toBe("Engineer");
    });
    test("generates github", () => {
      expect(engineer.getGithub()).toBe(
        `GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a>`
      );
    });
  });
});
