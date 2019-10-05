import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookooDetailPage } from './bookoo-detail.page';

describe('BookooDetailPage', () => {
  let component: BookooDetailPage;
  let fixture: ComponentFixture<BookooDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookooDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookooDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
