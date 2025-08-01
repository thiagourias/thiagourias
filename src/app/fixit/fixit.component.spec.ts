import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixitComponent } from './fixit.component';

describe('FixitComponent', () => {
  let component: FixitComponent;
  let fixture: ComponentFixture<FixitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
