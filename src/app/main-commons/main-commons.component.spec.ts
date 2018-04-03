import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommonsComponent } from './main-commons.component';

describe('MainCommonsComponent', () => {
  let component: MainCommonsComponent;
  let fixture: ComponentFixture<MainCommonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCommonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
