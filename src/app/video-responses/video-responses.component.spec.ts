import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoResponsesComponent } from './video-responses.component';

describe('VideoResponsesComponent', () => {
  let component: VideoResponsesComponent;
  let fixture: ComponentFixture<VideoResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoResponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
