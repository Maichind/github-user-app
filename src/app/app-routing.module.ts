import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { GitHubUserComponent } from './pages/git-hub-user/git-hub-user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'github-user',
        component: GitHubUserComponent
      },
      { path: '', redirectTo: 'github-user', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'github-user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
