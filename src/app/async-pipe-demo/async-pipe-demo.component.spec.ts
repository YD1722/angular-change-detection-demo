import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AsyncPipeDemoComponent } from './async-pipe-demo.component';

describe('AsyncPipeDemoComponent', () => {
  let component: AsyncPipeDemoComponent;
  let fixture: ComponentFixture<AsyncPipeDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
