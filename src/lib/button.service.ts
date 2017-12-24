import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ButtonService {
  constructor(private httpClient: HttpClient) { }
  user(user: string): Observable<any> {
    return this.httpClient
      .get<any>('https://api.github.com/users/' + user);
  }
  repo(user: string, repo: string): Observable<any> {
    return this.httpClient
      .get<any>('https://api.github.com/repos/' + user + '/' + repo);
  }
}
