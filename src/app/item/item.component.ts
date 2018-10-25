import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Input() data: any;
  @Input() selected: boolean;
  ngOnInit() {
  }


  select(e){
    this.selected = this.selected ? false : true;
  }

}