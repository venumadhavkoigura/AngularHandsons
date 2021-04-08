import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url: string = 'https://reqres.in/api/users';

  user: User[];
  myData = {};
  constructor(private http: HttpClient) {}

  getAllUsers(): any {
    return this.http.get<any>(this._url);
  }

  createUser(data: { name: string; job: string }): Observable<any> {
    return this.http.post(this._url + '?page=2', data);
  }

  updateUser(
    userID: number,
    data: { name: string; job: string }
  ): Observable<any> {
    return this.http.put(this._url + '/' + userID, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this._url + '/' + id);
  }
}