import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetachDemoComponent } from './detach-demo.component';

describe('DetachDemoComponent', () => {
  let component: DetachDemoComponent;
  let fixture: ComponentFixture<DetachDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetachDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetachDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
