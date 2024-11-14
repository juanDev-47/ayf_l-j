import { Component, EventEmitter, Input, Output } from '@angular/core';

interface DropdownOption {
  value: any;
  label: string;
}

@Component({
  selector: 'app-dropdown-atom',
  templateUrl: './dropdown-atom.component.html',
  styleUrl: './dropdown-atom.component.scss'
})
export class DropdownAtomComponent {
  @Input() options: DropdownOption[] = [];
  @Input() placeholder: string = '';
  @Output() valueChange = new EventEmitter<any>();

  selectedValue: any = '';

  onValueChange(value: any) {
    this.valueChange.emit(value);
  }
}
