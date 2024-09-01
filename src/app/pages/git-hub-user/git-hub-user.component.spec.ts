import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubUserComponent } from './git-hub-user.component';

describe('GitHubUserComponent', () => {
  let component: GitHubUserComponent;
  let fixture: ComponentFixture<GitHubUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitHubUserComponent]
    });
    fixture = TestBed.createComponent(GitHubUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
