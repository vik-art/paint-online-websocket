import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannotAccessPageComponent } from './cannot-access-page.component';

describe('CannotAccessPageComponent', () => {
  let component: CannotAccessPageComponent;
  let fixture: ComponentFixture<CannotAccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CannotAccessPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CannotAccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
