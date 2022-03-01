const Manager = require("../lib/Manager");
const manager = new Manager("Manager");
describe("Manager Class Test", () => {
  describe("test Manager properties", () => {
    test("creates a Manager profile", () => {
      expect(manager.role).toBe("Manager");
    });
    test("generates office number", () => {
      expect(manager.getOfficeNumber()).toBe(
        `Office Number: ${this.officeNumber}`
      );
    });
  });
});
