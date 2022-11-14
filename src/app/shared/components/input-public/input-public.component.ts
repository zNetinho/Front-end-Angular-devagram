import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-public',
  templateUrl: './input-public.component.html',
  styleUrls: ['./input-public.component.scss']
})
export class InputPublicComponent implements OnInit {

  @Input() placeHolder?: string;
  @Input() cor: string = '';
  @Input() classeCss: string = '';
  @Input() type: string = 'button';
  @Input() disable: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
