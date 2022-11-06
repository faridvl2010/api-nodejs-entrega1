import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRolesAdminComponent } from './assign-roles-admin.component';

describe('AssignRolesAdminComponent', () => {
  let component: AssignRolesAdminComponent;
  let fixture: ComponentFixture<AssignRolesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignRolesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignRolesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
