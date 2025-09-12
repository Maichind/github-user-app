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
        path: 'search-user',
        component: GitHubUserComponent
      },
      { path: '', redirectTo: 'search-user', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'search-user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
