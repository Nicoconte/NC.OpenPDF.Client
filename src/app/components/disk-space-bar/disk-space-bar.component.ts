import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IDiskSpace } from 'src/app/interfaces/disk-space.interface';
import { DiskSpaceService } from 'src/app/services/disk-space.service';

@Component({
  selector: 'app-disk-space-bar',
  templateUrl: './disk-space-bar.component.html',
  styleUrls: ['./disk-space-bar.component.css']
})
export class DiskSpaceBarComponent implements OnInit {

  private progressBar!: any;
  
  public diskSpaceInfo!: IDiskSpace;
  public usagePercentage: number = 0;
  public barBgColor!: string; 

  @Input() reloadBar: boolean = false;

  constructor(private diskSpaceService: DiskSpaceService) {
    this.diskSpaceInfo = {} as IDiskSpace; //This fix 'cannot read of undefined'
  }

  ngOnInit(): void {
    this.progressBar = document.getElementById('disk-space-progressbar')
    this.getInfo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.reloadBar = changes['reloadBar'].currentValue;
    this.updateDiskSpaceBarInfo(this.reloadBar);

    changes['reloadBar'].currentValue = false;
    this.reloadBar = false;
  }

  public changeBarState(percentage: number) {
    if (percentage > 0 && percentage < 60) {
        this.barBgColor = 'bg-success'
    }
    if (percentage >= 60 && percentage < 85) {
      this.barBgColor = 'bg-warning'
    }

    if (percentage >= 85 && percentage <= 100) {
      this.barBgColor = 'bg-danger'
    }
  }

  public calculatePercentage() {
    this.usagePercentage = Math.floor((this.diskSpaceInfo.space_used * 100) / this.diskSpaceInfo.limit);
    this.progressBar.value = this.usagePercentage;
    this.progressBar.style.width = `${this.usagePercentage}%`
    this.changeBarState(this.usagePercentage);
  }

  public getInfo() {
    this.diskSpaceService.get().subscribe(res => {
      if (res.status) {
        this.diskSpaceInfo = res.data;
        this.calculatePercentage();
      }
    })
  }

  public updateDiskSpaceBarInfo(shouldUpdate: any) {
    if(shouldUpdate) {
      console.log("Actualizando")
      this.getInfo();
    }
  }

}
