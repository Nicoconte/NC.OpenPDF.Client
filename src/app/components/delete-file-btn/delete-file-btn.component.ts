import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-delete-file-btn',
  templateUrl: './delete-file-btn.component.html',
  styleUrls: ['./delete-file-btn.component.css']
})
export class DeleteFileBtnComponent implements OnInit {

  @Input() fileId: number = 0;
  @Input() classes: string = "btn btn-sm btn-danger ml-2"; // Default bootstrap styling
  @Input() icon: string = "fa fa-trash"

  @Output() shouldUpdateEvent = new EventEmitter();

  constructor(private fileService: FileService, private toastService: ToastrService) { }

  ngOnInit(): void {
  }

  public deleteFile() {
    this.fileService.delete(this.fileId).subscribe((res) => {
      if (res.status) {
        this.toastService.success("Deleted!", "Hellyeah :)");
        this.shouldUpdateEvent.emit(true);        
      } else {
        this.toastService.success(res.reason, "Oh hell no :(");        
      }
    })
  }

}
