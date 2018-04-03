import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowplayComponent } from './nowplay.component';

describe('NowplayComponent', () => {
  let component: NowplayComponent;
  let fixture: ComponentFixture<NowplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
