import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  email: string;

  constructor() { 
    this.email = 'wbhuang@gamil.com';
  }

  ngOnInit(): void {
    //'wbhuang@gamil.com';
  }

  onClick() {
    console.log(this.email);
  }
}
