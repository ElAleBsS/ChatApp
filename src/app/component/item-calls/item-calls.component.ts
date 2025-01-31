import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-calls',
  templateUrl: './item-calls.component.html',
  styleUrls: ['./item-calls.component.scss'],
  standalone:false
})
export class ItemCallsComponent  implements OnInit {


    @Input() username: string = '';
    @Input() date: string='';
    @Input() avatarUrl: string='';

  constructor() { }

  ngOnInit() {}

}
