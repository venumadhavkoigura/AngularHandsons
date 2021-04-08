import { Employee } from "./employee";
import { Department } from "./department";
import { Skill } from "./skill";

class EmployeeTest {
  employee: Employee = {
    id: undefined,
    name: undefined,
    salary: undefined,
    permanent: undefined,
    department: undefined,
    skills: undefined,
  };

  constructor(
    id?: number,
    name?: string,
    salary?: number,
    department?: Department,
    skills?: Skill[]
  ) {
    this.employee.id = id;
    this.employee.name = name;
    this.employee.salary = salary;
    this.employee.department = department;
    this.employee.skills = skills;
  }

  display(): void {
    console.log("ID: " + this.employee.id);
    console.log("Name: " + this.employee.name);
    console.log("Salary: " + this.employee.salary);
    console.log("Department ID: " + this.employee.department.id);
    console.log("Department Name: " + this.employee.department.name);
    let skills = this.employee.skills;
    for (var _i = 0; _i < skills.length; _i++) {
      let skill: Skill = skills[_i];
      console.log("skill[" + _i + "]:" + skill.id + ", " + skill.name);
    }
  }
}

let employeeTest = new EmployeeTest(
  101,
  "Venu Madhav",
  30000,
  {
    id: 100,
    name: "CSE",
  },
  [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS"
    },
    {
      id: 3,
      name: "JavaScript"
    }
  ]
);
employeeTest.display();