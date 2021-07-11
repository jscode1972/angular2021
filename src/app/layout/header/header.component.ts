import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/common/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title1 : string = '';
  title2 : string = '';
  sUrl1 = 'https://cmd-20200913.appspot.com/users';
  sUrl2 = 'http://localhost:3000/users';

  constructor(private svc : HttpService) { }

  ngOnInit(): void {
    //this.getDemo1(this.sUrl2);
    //this.getDemo1(this.sUrl2);
    //this.setDemo3(this.sUrl2);
  }

  getDemo1(sUrl : string) {
    this.svc.get(sUrl).subscribe(s => {
      this.title1 = s.name;
      console.log('demo1', s);
    });
  }

  getDemo2(sUrl : string) {
    this.svc.getAsync(sUrl).then(o => {
      o.subscribe( s => {
        console.log('getDemo2', s);
        this.title2 = s.name;
      });
    })
    .catch(e => {
      console.log('getDemo2', e);
    });
  }

  setDemo3(sUrl : string) {
    let body = { a: 99 };
    this.svc.post(sUrl, body ).subscribe(s => {
      console.log('demo3', s);
      this.title2 = s.name;
    });
  }

  /*function getDemo() {
    var i = 0;
    try {
      this.http.demo().then(s => {
        s.subscribe(x => {
          try {    
            throw new Error('subscribe 錯誤');
          }
          catch(e) {          // 只捕獲 <subscribe try block>
            console.log(i++); // 3.最後執行 (subscribe 錯誤)
          }
        });
        throw new Error('then 錯誤');
      })
      .catch(e => {       // 只捕獲 then block
        console.log(i++); // 2.第二執行 (then 錯誤)
      });
      throw new Error('try 錯誤');
    } catch(e) {        // 只捕獲 <最外層 try block>
      console.log(i++); // 1.最先執行 (try 錯誤)
    }
  }*/
}
