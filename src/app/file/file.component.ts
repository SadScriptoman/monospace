import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.less']
})
export class FileComponent implements OnInit {

  files: any[];
  dragOver: boolean = false;

  preventDefaults(e){

    e.preventDefault();
    e.stopPropagation();
    
  }


  handleDragEnter(e){

    this.dragOver = true;
    this.preventDefaults(e);

  }

  handleDragLeave(e){

    this.dragOver = false;
    this.preventDefaults(e);

  }

  handleDragOver(e){

    this.dragOver = true;
    this.preventDefaults(e);
    
  }

  handleDrop(e){

    this.preventDefaults(e);
    this.files = e.dataTransfer.files;
    this.dragOver = false;
  }

  handleFiles(e){
    this.files = e.target.files;
  }


  removeFiles(e){

    this.preventDefaults(e);
    this.files = null;

  }

  uploadFile(file) {
    let url = '#';
    let formData = new FormData();
    formData.append('file', file);
    fetch(url, {
      method: 'POST',
      body: formData
    });
  }

  constructor(private svc : TranslationService ){}

  ngOnInit() {
  }

}
