import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaourseComponent } from './caourse.component';

describe('CaourseComponent', () => {
  let component: CaourseComponent;
  let fixture: ComponentFixture<CaourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
