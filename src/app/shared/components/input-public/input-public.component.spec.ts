import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPublicComponent } from './input-public.component';

describe('InputPublicComponent', () => {
  let component: InputPublicComponent;
  let fixture: ComponentFixture<InputPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
