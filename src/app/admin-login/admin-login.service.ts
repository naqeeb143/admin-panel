import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient) { }

  Admin(data: any)  {
    return this.http.post('http://localhost:3000/adminLogin',data)
  }
}
