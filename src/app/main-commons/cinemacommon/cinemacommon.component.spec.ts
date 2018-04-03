import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemacommonComponent } from './cinemacommon.component';

describe('CinemacommonComponent', () => {
  let component: CinemacommonComponent;
  let fixture: ComponentFixture<CinemacommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemacommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemacommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
