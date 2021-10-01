import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MeuschamadosPage } from './meuschamados.page';

describe('MeuschamadosPage', () => {
  let component: MeuschamadosPage;
  let fixture: ComponentFixture<MeuschamadosPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuschamadosPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MeuschamadosPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to home on create new chamado', () => {
    spyOn(router,'navigate');

    component.newPickupCall();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  })

});
