import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutComponent } from './pages/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GitHubUserComponent } from './pages/git-hub-user/git-hub-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GitHubUserComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
