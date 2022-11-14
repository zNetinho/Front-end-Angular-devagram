import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPublicComponent } from './button-public.component';

describe('ButtonPublicComponent', () => {
  let component: ButtonPublicComponent;
  let fixture: ComponentFixture<ButtonPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
