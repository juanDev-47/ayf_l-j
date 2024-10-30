import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-atom',
  templateUrl: './card-atom.component.html',
  styleUrl: './card-atom.component.scss'
})
export class CardAtomComponent implements OnInit {


  @Input() url?: string = "";
  @Input() name: string = "";
  @Input() brand?: string = "";
  @Input() gender?: string = "";

  constructor() {}

  ngOnInit(): void {
  }

}
