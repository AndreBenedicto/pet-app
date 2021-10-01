import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meuschamados',
  templateUrl: './meuschamados.page.html',
  styleUrls: ['./meuschamados.page.scss'],
})
export class MeuschamadosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newPickupCall(){
    this.router.navigate(['home']);
  }

}
