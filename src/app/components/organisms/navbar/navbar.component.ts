import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  onPerfumButtonClick(){
    this.router.navigate(['/dashboard']);
  }

}
