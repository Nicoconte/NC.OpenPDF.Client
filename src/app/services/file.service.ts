import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseURL: string = "/open-pdf/api/files";

  private token: string; 

  constructor(private http: HttpClient, private storage: StorageService) { 
    this.token = `Token ${this.storage.get('token')}`;
  }

  public buildFormdata(files: File[]): FormData {
    const formData = new FormData();

    files.forEach(f => {
      formData.append("files", f)
    })

    return formData;
  }

  public upload(formData: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/upload/`, formData, {
      headers: new HttpHeaders({ 
        'Authorization': this.token
      })
    })
  }

}