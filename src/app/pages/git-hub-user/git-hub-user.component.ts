import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GithubService } from 'src/app/core/github.service';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

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

  constructor(private githubService: GithubService, public dialog: MatDialog) { }

  searchUser() {
    if (this.username.length > 0) {
      this.loading = true;
      this.githubService.getUser(this.username).subscribe({
        next: (data: any) => {
          this.user = data;
    
          this.githubService.getUserRepos(this.username).subscribe({
            next: (repos: any) => {
              this.repos = repos;
              this.loading = false;
            },
            error: (error) => {
              this.showErrorDialog(error?.error?.message);
              this.loading = false;
            }
          });
        },
        error: (error) => {
          this.showErrorDialog(error?.error?.message);
          this.loading = false;
        }
      });
    } else {
      this.showErrorDialog('You must enter a character for the search.');
    }
  }  

  showErrorDialog(message: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: { message },
      disableClose: true
    });
  }
  
}
