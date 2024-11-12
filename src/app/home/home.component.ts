/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','../../css/style.css', '../../css/slicknav.min.css', '../../css/owl.carousel.min.css', '../../css/magnific-popup.css', '../../css/barfiller.css', '../../css/bootstrap.min.css', '../../css/flaticon.css', '../../css/font-awesome.min.css']
})
export class HomeComponent {
  constructor(
    private router: Router
  ) {

  }
  navegarParaBusca(ev: any) {
    this.router.navigate(['busca']);
  }
}
