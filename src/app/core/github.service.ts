import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = environments.url_github;

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${username}`);
  }

  getUserRepos(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${username}/repos`);
  }
}
