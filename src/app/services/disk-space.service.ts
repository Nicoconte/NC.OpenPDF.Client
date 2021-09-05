import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDiskSpace } from '../interfaces/disk-space.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DiskSpaceService {
  
  private baseURL: string = "/open-pdf/api/disk-space";
  private token: string = `Token ${this.storage.get('token')}`; 

  constructor(private http: HttpClient, private storage: StorageService) { }
  
  public get(): Observable<any> {
    return this.http.get<IDiskSpace>(`${this.baseURL}/info/`, {
      headers: new HttpHeaders({
        'Authorization': `Token ${this.storage.get('token')}`
      })
    })
  }

}
