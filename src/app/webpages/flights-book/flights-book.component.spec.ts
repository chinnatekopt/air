import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsBookComponent } from './flights-book.component';

describe('FlightsBookComponent', () => {
  let component: FlightsBookComponent;
  let fixture: ComponentFixture<FlightsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightsBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
