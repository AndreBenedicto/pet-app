import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;
  let sobre: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    sobre = TestBed.get(Router);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should go to chamados on se all', () => {
    spyOn(router,'navigate');

    component.goToPickupCalls();

    expect(router.navigate).toHaveBeenCalledWith(['chamados'])
  })

  it('should go to new chamado on create chamado ', () => {
    spyOn(router,'navigate');

    component.newPickupCall();

    expect(router.navigate).toHaveBeenCalledWith(['chamados'])
  })

  it('should go to sobre page on home', () => {
    spyOn(sobre, 'navigate');

    component.sobrenos();

    expect(sobre.navigate).toHaveBeenCalledWith(['sobre']);
  })

});
