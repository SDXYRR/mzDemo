import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DglassComponent } from './dglass.component';

describe('DglassComponent', () => {
  let component: DglassComponent;
  let fixture: ComponentFixture<DglassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DglassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DglassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
