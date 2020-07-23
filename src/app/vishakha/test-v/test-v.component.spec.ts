import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVComponent } from './test-v.component';

describe('TestVComponent', () => {
  let component: TestVComponent;
  let fixture: ComponentFixture<TestVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
