import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidComponentComponent } from './vid-component.component';

describe('VidComponentComponent', () => {
  let component: VidComponentComponent;
  let fixture: ComponentFixture<VidComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VidComponentComponent]
    });
    fixture = TestBed.createComponent(VidComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
