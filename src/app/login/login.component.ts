import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    console.log('plugins cargados desde login.component');
      init_plugins();
  }

  ingresar() {
    console.log('logueado');
    this.router.navigate([ '/home' ]);
  }

}
