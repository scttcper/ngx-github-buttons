import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ButtonService {
  constructor(private httpClient: HttpClient) { }
  user(user: string) {
    return this.httpClient
      .get<any>('https://api.github.com/users/' + user);
  }
  repo(user: string, repo: string) {
    return this.httpClient
      .get<any>('https://api.github.com/repos/' + user + '/' + repo);
  }
}
