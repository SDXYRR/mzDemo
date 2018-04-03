import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmpageComponent } from './filmpage.component';

describe('FilmpageComponent', () => {
  let component: FilmpageComponent;
  let fixture: ComponentFixture<FilmpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
