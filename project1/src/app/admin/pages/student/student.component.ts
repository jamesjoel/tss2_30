import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  allStu = [
    {
      name : "rohit",
      age : 26,
      gender : "male",
      fee : 7000
    },
    {
      name : "gaurav",
      age : 21,
      gender : "male",
      fee : 5000
    },
    {
      name : "nidhi",
      age : 24,
      gender : "female",
      fee : 6000
    },
    {
      name : "amar",
      age : 28,
      gender : "male",
      fee : 7500
    },
    {
      name : "jaya",
      age : 24,
      gender : "female",
      fee : 5000
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
