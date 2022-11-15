import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolComponent } from './admin-rol.component';

describe('AdminRolComponent', () => {
  let component: AdminRolComponent;
  let fixture: ComponentFixture<AdminRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
