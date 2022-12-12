import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntheUiComponent } from './anthe-ui.component';

describe('AntheUiComponent', () => {
  let component: AntheUiComponent;
  let fixture: ComponentFixture<AntheUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntheUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntheUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
