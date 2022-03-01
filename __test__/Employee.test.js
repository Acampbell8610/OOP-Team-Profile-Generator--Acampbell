const Employee = require("../lib/Employee");

describe("Employee Class Test", () => {
  const employee = new Employee("Dave", 1, "email");
  describe("test employee properties", () => {
    test("creates a employee profile", () => {
      expect(employee.name).toBe("Dave");
      expect(employee.id).toBe(1);
      expect(employee.email).toBe("email");
    });
  });
  describe("test employee funtions", () => {
    test("test get name", () => {
      expect(employee.getName()).toBe("Dave");
    });
    test("test get id", () => {
      expect(employee.getId()).toBe(1);
    });
    test("test get email", () => {
      expect(employee.getEmail()).toBe(
        `<a href="mailto:${employee.email}">${employee.email}</a>`
      );
    });
    test("test get role", () => {
      expect(employee.getRole()).toBe("Employee");
    });
  });
});
