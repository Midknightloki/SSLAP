import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaHomeComponent } from './ga-home.component';

describe('GaHomeComponent', () => {
  let component: GaHomeComponent;
  let fixture: ComponentFixture<GaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
