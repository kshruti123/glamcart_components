import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vid2ComponentComponent } from './vid2-component.component';

describe('Vid2ComponentComponent', () => {
  let component: Vid2ComponentComponent;
  let fixture: ComponentFixture<Vid2ComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vid2ComponentComponent]
    });
    fixture = TestBed.createComponent(Vid2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
