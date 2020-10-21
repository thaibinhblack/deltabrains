import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarActionUserComponent } from './sidebar-action-user.component';

describe('SidebarActionUserComponent', () => {
  let component: SidebarActionUserComponent;
  let fixture: ComponentFixture<SidebarActionUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarActionUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarActionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
