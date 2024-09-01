import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    UserCardComponent
  ]
})
export class SharedModule { }
