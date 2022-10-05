import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChangerChildComponent } from './color-changer-child.component';

describe('ColorChangerChildComponent', () => {
  let component: ColorChangerChildComponent;
  let fixture: ComponentFixture<ColorChangerChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorChangerChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorChangerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
