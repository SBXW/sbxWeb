import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private route: Router) { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
          label:'Productos',
          icon:'pi pi-shopping-bag',
          command:(click)=>{this.route.navigate(['/productos']);}
      }
  ];
}
}


