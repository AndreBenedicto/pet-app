import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.page.html',
  styleUrls: ['./chamados.page.scss'],
})
export class ChamadosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newPickupCall(){
    this.router.navigate(['home'])
  }

}
