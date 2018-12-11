import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-icon',
  templateUrl: './budget-icon.component.html',
  styleUrls: ['./budget-icon.component.css']
})
export class BudgetIconComponent implements OnInit {

  @Input() icon;

  constructor() { }

  ngOnInit() {
  }

}
