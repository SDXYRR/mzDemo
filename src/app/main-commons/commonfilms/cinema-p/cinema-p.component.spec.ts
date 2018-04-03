import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaPComponent } from './cinema-p.component';

describe('CinemaPComponent', () => {
  let component: CinemaPComponent;
  let fixture: ComponentFixture<CinemaPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
