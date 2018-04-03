import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonfilmsComponent } from './commonfilms.component';

describe('CommonfilmsComponent', () => {
  let component: CommonfilmsComponent;
  let fixture: ComponentFixture<CommonfilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonfilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
