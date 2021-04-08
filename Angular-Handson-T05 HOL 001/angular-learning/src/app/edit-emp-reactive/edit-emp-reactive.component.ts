import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { Department } from '../Employee/department';
import { Employee } from '../Employee/employee';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css'],
})
export class EditEmpReactiveComponent {
  
  employee: Employee = {
    id: undefined,
    name: undefined,
    salary: undefined,
    permanent: undefined,
    department: undefined,
    skills: undefined,
  };

  
  empForm = this.formbuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    ],
    salary: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    permanent: [false],
    department: [101],
  });


  departments: Department[];

  constructor(private formbuilder: FormBuilder) {
    
    this.departments = [
      {
        id: 101,
        name: 'CSE',
      },
      {
        id: 102,
        name: 'ECE',
      },
      {
        id: 103,
        name: 'EEE',
      },
    ];
  }

  

  get name() {
    return this.empForm.get('name');
  }
  get salary() {
    return this.empForm.get('salary');
  }

  onSubmit() {
    console.log('Is Invalid:' + this.empForm.invalid);
    console.log('Employee Form Details from the form');
    console.log('Employee Name: ' + this.empForm.value.name);
    console.log('Employee Salary: ' + this.empForm.value.salary);
    console.log('Employee is Permanent: ' + this.empForm.value.permanent);
    console.log('Employee Department Id is: ' + this.empForm.value.department);

    this.employee.name = this.empForm.value.name;
    this.employee.salary = this.empForm.value.salary;
    this.employee.permanent = this.empForm.value.permanent;
    let selectedDept: Department;
    for (let dep of this.departments) {
      if (dep.id == this.empForm.value.department) {
        selectedDept = dep;
      }
    }

    this.employee.department = {
      id: selectedDept.id,
      name: selectedDept.name,
    };
    console.log('Employee Details from the Employee Object');
    console.log('Employee Name: ' + this.employee.name);
    console.log('Employee Salary: ' + this.employee.salary);
    console.log('Employee is Permanent: ' + this.employee.permanent);
    console.log('Employee Department Id: ' + this.employee.department.id);
    console.log('Employee Department Name: ' + this.employee.department.name);
  }
}