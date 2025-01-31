import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-state',
  templateUrl: './item-state.component.html',
  styleUrls: ['./item-state.component.scss'],
  standalone:false
})
export class ItemStateComponent  implements OnInit {


  @Input() username: string = '';
  @Input() date: string='';
  @Input() avatarUrl: string='';
  constructor() { }

  ngOnInit() {}

}
