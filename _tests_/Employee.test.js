const Employee = require('../lib/Employee');

test("Create new employee", () => {
    const newEmployee = new Employee();
    exportAllDeclaration(typeof(newEmployee)).toBe("object");
});

test("Employee name", () => {
    const testName = "John";
    const newEmployee = new Employee(testName);
    expect(newEmployee.name).toBe(testName);
});

test("Employee ID", () => {
    const testId = 123;
    const newEmployee = new Employee("Bob", testId);
    expect(newEmployee.id).toBe(testId);
});

test("Employee email", () => {
    const testEmail = "test@email.com";
    const newEmployee = new Employee("Bob", 123, testEmail);
    expect(newEmployee.email).toBe(testEmail);
});

test("Name via getName()", () => {
    const testGetName = "John";
    const newEmployee = new Employee(testGetName);
    expect(newEmployee.getName()).toBe(testGetName);
});

test("ID via getId()", () => {
    const testGetId = 123;
    const newEmployee = new Employee("Bob", testGetId);
    expect(newEmployee.getId()).toBe(testGetId);
});

test("Email via getEmail()", () => {
    const testGetEmail = "test@email.com";
    const newEmployee = new Employee("Bob", 123, testGetEmail);
    expect(newEmployee.getEmail()).toBe(testGetEmail);
});

test("Role via getRole()", () => {
    const testRole = "Employee";
    const newEmployee = new Employee("John", 123, "test@email.com");
    expect(newEmployee.getRole()).toBe(testRole);
});