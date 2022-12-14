import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-public',
  templateUrl: './page-public.component.html',
  styleUrls: ['./page-public.component.scss']
})
export class PagePublicComponent implements OnInit {

@Input() classCss:string = '';
@Input() classCssLogo:string = '';
@Input() textBtnSubmit?:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChecked(): void {
    console.log('Olá')
  }

}
