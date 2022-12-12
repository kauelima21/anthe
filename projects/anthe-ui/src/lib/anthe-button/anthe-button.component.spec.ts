import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntheButtonComponent } from './anthe-button.component';

describe('AntheButtonComponent', () => {
  let component: AntheButtonComponent;
  let fixture: ComponentFixture<AntheButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntheButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntheButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
