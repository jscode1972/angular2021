## 開發
安裝 angular 專案

## 編譯 dist 
* (<base href="./">)
* $ ng build --prod --base-href=./
* environment 設定 (prod/dev)

## 部署 hosting
$ firebase init 
$ firebase deploy

## 框架 layout
assets/AdminLTE@3.1.0/dist/全部
assets/AdminLTE@3.1.0/plugins/需要
分割 starter.html => layout
ng g m layout
ng g c layout/組件 (header/sidebar/content/control/footer)
ng g interface layout/sidemenu

## sidebar
### *.html
``` html
  <li *ngFor="let menu of menus" class="nav-item" [class.menu-open]="menu.active">
  <li *ngFor="let item of menu.items" class="nav-item">
    <a href="#" class="nav-link" [class.active]="menu.active && item.active" (click)="onToggle(item)">
```
### *.ts
``` javascript
  @Output() xxx = new EventEmitter<any>();
  onToggle(item:any) { 
      this.xxx.emit(xxx);
  }
```
### *.css
``` html
  .nav-sidebar>.nav-item>.nav-link.focused {
      color: rgb(243, 240, 45);
  }
```

# Angular2021

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
