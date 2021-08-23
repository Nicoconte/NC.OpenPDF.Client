import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL: string = "/open-pdf/api/users";

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/login/`, credentials)
  }  

  public register(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/register/`, credentials);
  }

  public logout(): void {
    this.storageService.remove('token');
  }

  public isAuthenticated(): Observable<boolean> {
    return of(this.storageService.exists('token'))
  }

}
