
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import * as data from './../companies.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public route: Router) {}
  data1;
  ngOnInit(): void {
    console.log(data)
    this.data1 = data;
  }


  onSelectedCompany(id){
    this.route.navigate([`/company/${id}`])
  }
}
