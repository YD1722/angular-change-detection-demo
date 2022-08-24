import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeroCardAsyncPipeComponent } from './hero-card-async-pipe.component';

describe('HeroCardAsyncPipeComponent', () => {
  let component: HeroCardAsyncPipeComponent;
  let fixture: ComponentFixture<HeroCardAsyncPipeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCardAsyncPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
