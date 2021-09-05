import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import IFile from 'src/app/interfaces/files.interface';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.css']
})
export class FilesTableComponent implements OnInit {

  @Input() reloadTable: boolean = false; 

  public files: Array<IFile>;

  constructor(private fileService: FileService, private toastService: ToastrService) {
    this.files = new Array<IFile>();
  }

  ngOnInit(): void {
    this.listFiles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.reloadTable = changes['reloadTable'].currentValue;
    if (this.reloadTable) {
      this.listFiles();
    }
  }

  public updateFileTable(shouldUpdate: any) {
    if (shouldUpdate) {
      this.listFiles()
    }
  }

  public listFiles() {
    this.fileService.list().subscribe({
      next: res => {
        if (res.status) {
          this.files = res.data;
        } else {
          this.toastService.error(res.reason, "Oh no");
        }
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
