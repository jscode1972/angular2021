import { Component, OnInit } from '@angular/core';
import { MENUS, Sidemenu } from '../../models/layout/sidemenu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  title = 'QSYSTEM';
  menus = MENUS;
  selecteItem : any;

  constructor() { }

  ngOnInit(): void {
  }
  
  onToggle(item:any) {
    if (item == this.selecteItem) return;
    //console.log(item);
    for(var i=0; i<this.menus.length; i++) {
      var focused = false;
      var menu = this.menus[i];
      for(var j=0; j<menu.items.length; j++) {
        menu.items[j].active = (menu.items[j] == item);
        if (menu.items[j].active) {
          this.selecteItem = item;
          focused = true;
        }
      }
      menu.focused = focused;
    }
  }

}
