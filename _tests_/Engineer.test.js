const Engineer = require("../lib/Engineer");

test("Set GitHub via constructor", () => {
    const testGitHub = "username";
    const newEmployee = new Engineer("Bob", 123, "test@email.com", testGitHub);
    expect(newEmployee.github).toBe(testGitHub);
});

test("getRole() Engineer", () => {
    const testRole = "Engineer";
    const newEmployee = new Engineer("Bob", 123, "test@email.com", "username");
    expect(newEmployee.getRole()).toBe(testRole);
});

test("GitHub username via getGitHub()", () => {
    const testGetUsername = "username";
    const newEmployee = new Engineer("Bob", 123, "test@email.com", testGetUsername);
    expect(newEmployee.getGithub()).toBe(testGetUsername);
});