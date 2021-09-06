import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import IFile from 'src/app/interfaces/files.interface';
import { FileService } from 'src/app/services/file.service';

import { convertISOToDate } from 'src/app/utils/utils';

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.css']
})
export class FilesTableComponent implements OnInit {

  @Input() refreshTable: boolean = false; 

  @Output() shouldUpdateEvent = new EventEmitter();

  public files: Array<IFile>;

  constructor(private fileService: FileService, private toastService: ToastrService) {
    this.files = new Array<IFile>();
  }

  ngOnInit(): void {
    this.listFiles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshTable = changes['refreshTable'].currentValue;
    if (this.refreshTable) {
      this.listFiles();
    }
  }

  public formatToDate(date: string) { 
    return convertISOToDate(date);
  }

  public updateFileTable(shouldUpdate: any) {
    if (shouldUpdate) {
      this.listFiles()
      this.shouldUpdateEvent.emit(true);
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
