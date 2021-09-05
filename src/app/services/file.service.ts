import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IFile from '../interfaces/files.interface';
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

  public prepareDownloadPrompt(blob: any) {
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
  }

  public download(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/download/${id}/`, {
      headers: new HttpHeaders()
    })
  }

  public list(): Observable<any> {
    return this.http.get<IFile>(`${this.baseURL}/all/`, {
      headers: new HttpHeaders({
        'Authorization': this.token
      })
    });
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/remove/${id}/`, {
      headers: new HttpHeaders({
        'Authorization': this.token
      })
    })
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
