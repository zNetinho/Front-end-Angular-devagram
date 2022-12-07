import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent implements OnInit {

  @Input() referenceForm?: AbstractControl;
  @Input() classCssContainer: string = '';
  @Input() imagePreview?: string;
  @Input() classCssPreviewImage: string = '';
  @Output() refreshImage: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changePhoto(event: any): void {
    console.log('ta trocando')
    if(event.target.files && event.target.files.length) {
      const [arquive] = event.target.files;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(arquive);
      fileReader.onloadend = () => {
        this.imagePreview = fileReader.result as string;
        this.referenceForm?.setValue(arquive);
        this.referenceForm?.markAsDirty();
        this.refreshImage.emit(this.imagePreview)
      }
    }
  }

}
