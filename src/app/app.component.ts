import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FirstChildComponent} from './first-child/first-child.component';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChild('target', {static: false})
  target;

  @ViewChild(FirstChildComponent, {static: false})
  firstChild: FirstChildComponent;

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.target.nativeElement.innerText);

    console.log(this.firstChild);

    this.firstChild.hello();
  }


}
