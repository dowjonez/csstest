
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from  '@angular/common/http';
import { Component, Input } from '@angular/core';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  @Input() items : any;

  private params : HttpParams = new HttpParams();
  private headers : HttpHeaders = new HttpHeaders();
  constructor( http: HttpClient){
    let req = http.get("https://jsonplaceholder.typicode.com/todos", {}).subscribe(res=>{
        this.items = of(res)
    })
  }

}
