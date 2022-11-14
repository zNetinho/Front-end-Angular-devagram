import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() src?: string;
  @Input() classCss: string = '';


  constructor() { }

  ngOnInit(): void {
  }
  
  public obterAvatar(): string {
    if(this.src) {
      return this.src;
    }
    return 'assets/icon/User.svg'
  }

}
