import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetModalWindowComponent } from './greet-modal-window.component';

describe('GreetModalWindowComponent', () => {
  let component: GreetModalWindowComponent;
  let fixture: ComponentFixture<GreetModalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetModalWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreetModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
