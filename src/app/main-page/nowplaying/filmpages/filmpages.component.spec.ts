import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmpagesComponent } from './filmpages.component';

describe('FilmpagesComponent', () => {
  let component: FilmpagesComponent;
  let fixture: ComponentFixture<FilmpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
