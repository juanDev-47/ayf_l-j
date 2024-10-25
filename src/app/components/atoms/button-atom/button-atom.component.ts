import { Component, Input, OnInit } from '@angular/core';
import {
  BUTTON_DEFAULT_SIZE,
  BUTTON_SIZE_PREFIX,
  BUTTON_TYPE_PREFIX,
  BUTTON_STATE_PREFIX,
  BUTTON_DEFAULT_STATE,
  BUTTON_DEFAULT_TYPE,
} from '../../../shared/constants/atom-constants';
import { ButtonSize, ButtonType } from '../../../shared/types/enums';

@Component({
  selector: 'app-button-atom',
  templateUrl: './button-atom.component.html',
  styleUrl: './button-atom.component.scss',
})
export class ButtonAtomComponent implements OnInit {
  styles = '';

  @Input() size: ButtonSize = BUTTON_DEFAULT_SIZE;
  @Input() type: ButtonType = BUTTON_DEFAULT_TYPE;
  @Input() state: string = BUTTON_DEFAULT_STATE;
  @Input() isDisabled: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.styles = `${BUTTON_SIZE_PREFIX}${this.size} ${BUTTON_TYPE_PREFIX}${this.type} ${BUTTON_STATE_PREFIX}${this.state}`;
  }
}
