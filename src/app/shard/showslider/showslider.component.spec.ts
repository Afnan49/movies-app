import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsliderComponent } from './showslider.component';

describe('ShowsliderComponent', () => {
  let component: ShowsliderComponent;
  let fixture: ComponentFixture<ShowsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowsliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
