import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalessComponent } from './saless.component';

describe('SalessComponent', () => {
  let component: SalessComponent;
  let fixture: ComponentFixture<SalessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
