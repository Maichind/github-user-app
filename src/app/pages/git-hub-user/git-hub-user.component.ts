import { Component } from '@angular/core';
import { GithubService } from 'src/app/core/github.service';

@Component({
  selector: 'app-git-hub-user',
  templateUrl: './git-hub-user.component.html',
  styleUrls: ['./git-hub-user.component.scss']
})
export class GitHubUserComponent {
  username: string = '';
  user: any;
  repos: any[] = [];
  loading = false;

  constructor(private githubService: GithubService) { }

  searchUser() {
    this.loading = true;
    this.githubService.getUser(this.username).subscribe((data:any) => {
      this.user = data;
      this.githubService.getUserRepos(this.username).subscribe((repos:any) => {
        this.repos = repos;
      });
    });
    setTimeout(() => {
      this.loading = false;
    }, 300);
  }
}
