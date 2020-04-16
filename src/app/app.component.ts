import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Months:string[];
  ngOnInit()
  {
    this.Months=[
      "January","February","March","April","May","June","July","August","September","October","November","December"
    ]
  }
}
