import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, sobre: Router) { }

  ngOnInit() {
  }

  sobrenos(){
    this.router.navigate(['sobre']);
  }

  goToPickupCalls(){
    this.router.navigate(['chamados']);
  }
  newPickupCall(){
    this.router.navigate(['chamados']);
  }
}
