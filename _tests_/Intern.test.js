const Intern = require("../lib/Intern");

test("Set school via constructor", () => {
    const testSchool = "Purdue";
    const newEmployee = new Intern("Bob", 123, "test@email.com", testSchool);
    expect(newEmployee.school).toBe(testSchool);
});

test("getRole() Intern", () => {
    const testRole = "Intern";
    const newEmployee = new Intern("Bob", 123, "test@email.com", "Purdue");
    expect(newEmployee.getRole()).toBe(testRole);
});

test("School via getSchool()", () => {
    const testSchool = "Purdue";
    const newEmployee = new Intern("Bob", 123, "test@email.com", testSchool);
    expect(newEmployee.getSchool()).toBe(testSchool);
});