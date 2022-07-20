import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpwordComponent } from './forgetpword.component';

describe('ForgetpwordComponent', () => {
  let component: ForgetpwordComponent;
  let fixture: ComponentFixture<ForgetpwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpwordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
