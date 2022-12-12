import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonVariants } from './types/button-variant.enum';

@Component({
  selector: 'anthe-button',
  templateUrl: './anthe-button.component.html',
  styleUrls: ['./anthe-button.component.css'],
})
export class AntheButtonComponent {
  @Input()
  label: string = '';

  @Input()
  variant: ButtonVariants = ButtonVariants.primary;

  @Input()
  type: 'submit' | 'button' | 'reset' = 'button';

  @Input()
  full: boolean = false;

  @Output()
  event = new EventEmitter();
}
