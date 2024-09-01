import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: any;
  @Input() repos: any[] = [];

  showRepos: boolean = false;

  toggleReposVisibility(event: MouseEvent) {
    event.preventDefault();
    this.showRepos = !this.showRepos;
  }  

  get recentepos() {
    return this.repos.slice(0, 3);
  }
}
