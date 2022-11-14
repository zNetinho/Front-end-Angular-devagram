import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-public',
  templateUrl: './button-public.component.html',
  styleUrls: ['./button-public.component.scss']
})
export class ButtonPublicComponent implements OnInit {

  @Input() text?: string = 'login'
  @Input() color: string = 'primary'; 
  @Input() classCss: string = '';
  @Input() type: string = 'button';
  @Input() disable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
