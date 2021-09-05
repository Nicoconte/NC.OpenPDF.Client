import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FileService } from 'src/app/services/file.service';
import { ToastrService } from 'ngx-toastr';

import { FileValidators } from 'ngx-file-drag-drop';


@Component({
  selector: 'app-files-form',
  templateUrl: './files-form.component.html',
  styleUrls: ['./files-form.component.css']
})
export class FilesFormComponent implements OnInit {

  @Input() uploadBtnColor: string = "success"

  @Output() shouldUpdateEvent = new EventEmitter();

  private formData: FormData | undefined;
  private performFileUpload: boolean = false;

  public fileControl: FormControl;
  public isLoading: boolean = false;

  constructor(private fileService: FileService, private toast: ToastrService) { 
    this.fileControl = new FormControl([],[FileValidators.required])
  }

  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((files: File[]) => {
      if (!this.performFileUpload)
        this.handleUploadFile(files);
    })    
  }

  handleUploadFile(files: File[]) { 
    this.isLoading = true;

    this.formData = this.fileService.buildFormdata(files);

    this.fileService.upload(this.formData).subscribe({
      next: res => {
        if (res.status) {
          this.toast.success("Files has been uploaded", ":)")
          this.performFileUpload = true;
          this.fileControl.reset();
          this.performFileUpload = false
          this.isLoading = false;
          
          this.shouldUpdateEvent.emit(true);

        } else {
          this.toast.error(res.reason, ":C");
          this.isLoading = false;
        }
      },
      error: err => {
        alert(err);
      }
    })
  }

}
