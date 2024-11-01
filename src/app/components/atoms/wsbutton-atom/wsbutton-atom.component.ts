import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wsbutton-atom',
  templateUrl: './wsbutton-atom.component.html',
  styleUrl: './wsbutton-atom.component.scss'
})
export class WsbuttonAtomComponent implements OnInit {
  @Output() contactRequest = new EventEmitter<void>();

  constructor(){}

  ngOnInit(): void {}


  onContactClick(){
    this.contactRequest.emit();
  }

}
