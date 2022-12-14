import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-public',
  templateUrl: './footer-public.component.html',
  styleUrls: ['./footer-public.component.scss']
})
export class FooterPublicComponent implements OnInit {

  @Input() ask?: string;
  @Input() textToAction?: string;
  @Input() route?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
