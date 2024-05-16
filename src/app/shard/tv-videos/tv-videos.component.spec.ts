import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvVideosComponent } from './tv-videos.component';

describe('TvVideosComponent', () => {
  let component: TvVideosComponent;
  let fixture: ComponentFixture<TvVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
