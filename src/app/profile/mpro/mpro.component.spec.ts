import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MproComponent } from './mpro.component';

describe('MproComponent', () => {
  let component: MproComponent;
  let fixture: ComponentFixture<MproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
