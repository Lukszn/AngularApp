import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'LS-content-card',
  template: `
  <div class="card">
  <div class="card-block">
    <h4 class="card-title">{{title}}</h4>
    <p class="card-text">{{text}}</p>
  </div>
</div>
  `,
  // inputs:[
  //   `tiele`,
  //   `content`
  // ],
  styles: [`
    h4{
      color: red;
    }
  `],

})
export class ContentCardComponent implements OnInit {

  @Input()
  title = '';
  @Input('content')
  text = '';

  constructor() { }

  ngOnInit() {
  }

}
