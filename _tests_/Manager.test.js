const Manager = require("../lib/Manager");

test("Set office via constructor", () => {
    const testOffice = 456;
    const newEmployee = new Manager("Bob", 123, "test@email.com", testOffice);
    expect(newEmployee.officeNumber).toBe(testOffice);
});

test("getRole() Manager", () => {
    const testRole = "Manager";
    const newEmployee = new Manager("Bob", 123, "test@email.com", 456);
    expect(newEmployee.getRole()).toBe(testRole);
});

test("Office via getOffice()", () => {
    const testOffice = 456;
    const newEmployee = new Manager("Bob", 123, "test@email.com", testOffice);
    expect(newEmployee.getOfficeNumber()).toBe(testOffice);
});