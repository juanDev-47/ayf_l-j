import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfums',
  templateUrl: './perfums.component.html',
  styleUrl: './perfums.component.scss'
})
export class PerfumsComponent implements OnInit {


  constructor(){}
  
  ngOnInit(): void {}


  contactarWhatsApp(){
    const numeroTelefono = '3162875421';
    window.open(`https://wa.me/${numeroTelefono}?text=Hola,%20estoy%20interesado%20en%20un%20perfume.`, '_blank');
  }


}
