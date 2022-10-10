import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackComponentComponent } from './back-component.component';

describe('BackComponentComponent', () => {
  let component: BackComponentComponent;
  let fixture: ComponentFixture<BackComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
