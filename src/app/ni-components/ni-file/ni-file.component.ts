import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ni-file',
  templateUrl: './ni-file.component.html',
  styleUrls: ['./ni-file.component.scss']
})
export class NiFileComponent implements OnInit {
  @Input() title:string = 'no-name';
  @Input() type:string = '*';
  @Input() image:string = '';
  @Input() size:string = 'normal';
  @Input() delete:boolean = false;
  @Input() spinner:boolean = false;
  @Input() link:any = false;

  constructor() {}

  ngOnInit() {}
}
