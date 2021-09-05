import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-download-btn',
  templateUrl: './download-btn.component.html',
  styleUrls: ['./download-btn.component.css']
})
export class DownloadBtnComponent implements OnInit {

  @Input() fileId: string = "0";
  @Input() classes: string = "btn btn-sm btn-info"; // Default bootstrap styling

  constructor(private fileService: FileService, private toastService: ToastrService) { }

  ngOnInit(): void {
  }

  public downloadFile() {
    this.fileService.download(Number(this.fileId)).subscribe({
      next: res => {
        
        if ('status' in res) {
          this.toastService.error(res.reason, "Oh no");
        } else {
          //this.fileService.prepareDownloadPrompt(res);        
        }

      },
      error: err => {
        console.log(err)
      }
    })
  }


}
