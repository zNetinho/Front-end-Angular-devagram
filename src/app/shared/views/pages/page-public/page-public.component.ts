import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-public',
  templateUrl: './page-public.component.html',
  styleUrls: ['./page-public.component.scss']
})
export class PagePublicComponent implements OnInit {

@Input() classCss:string = '';
@Input() classCssLogo:string = '';
@Input() textBtnSubmit?:string = '';
@Output() submitForm: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitForm.emit();
  }

}
