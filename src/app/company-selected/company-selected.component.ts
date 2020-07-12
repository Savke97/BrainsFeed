
import { Component, OnInit } from '@angular/core';
import * as data from './../companies.json'
import {Router, ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-company-selected',
  templateUrl: './company-selected.component.html',
  styleUrls: ['./company-selected.component.css']
})
export class CompanySelectedComponent implements OnInit {
  items;
  res;
  showMore: boolean = false;

  constructor(public route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.items = data;
    this.route.params.subscribe(params => {
      this.res = this.items.default.filter(el => el.objectID === params.id);
    })
  }

  onShowMore(){
    this.showMore = true;
  }
}
